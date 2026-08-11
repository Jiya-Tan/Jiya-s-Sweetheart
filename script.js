document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Theme / atmosphere toggle
  const themeButton = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("jiyaTheme");
  if (savedTheme === "light") body.classList.add("light-mode");

  if (themeButton) {
    themeButton.textContent = body.classList.contains("light-mode") ? "☀" : "☾";
    themeButton.addEventListener("click", () => {
      body.classList.toggle("light-mode");
      const light = body.classList.contains("light-mode");
      localStorage.setItem("jiyaTheme", light ? "light" : "dark");
      themeButton.textContent = light ? "☀" : "☾";
    });
  }

  // Mobile menu
  const menu = document.querySelector(".mobile-menu");
  const nav = document.querySelector(".main-nav");
  if (menu && nav) {
    menu.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  // Floating particles
  const particles = document.getElementById("particles");
  if (particles && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const symbols = ["✦", "✧", "·", "♡", "꩜"];
    for (let i = 0; i < 26; i++) {
      const el = document.createElement("span");
      el.className = "particle";
      el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;
      el.style.animationDelay = `${Math.random() * 7}s`;
      el.style.animationDuration = `${5 + Math.random() * 7}s`;
      particles.appendChild(el);
    }
  }

  // Product category pages
  const grid = document.querySelector("[data-product-grid]");
  if (grid && typeof STORE !== "undefined") {
    const key = body.dataset.page;
    let products = [...(STORE[key] || [])];
    const empty = document.querySelector("[data-empty]");
    const search = document.querySelector("[data-search]");
    const sort = document.querySelector("[data-sort]");

    function placeholder(name) {
      const encoded = encodeURIComponent(name);
      return `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000"><rect width="800" height="1000" fill="%23120e14"/><text x="50%25" y="45%25" dominant-baseline="middle" text-anchor="middle" fill="%23d7c5ce" font-size="64" font-family="Georgia">${encoded}</text><text x="50%25" y="54%25" dominant-baseline="middle" text-anchor="middle" fill="%238f7281" font-size="24" font-family="Arial">YOUR PRODUCT IMAGE</text><text x="50%25" y="61%25" dominant-baseline="middle" text-anchor="middle" fill="%23624f5a" font-size="18" font-family="Arial">edit products.js</text></svg>`;
    }

    function render(list) {
      grid.innerHTML = "";
      if (!list.length) {
        empty.hidden = false;
        return;
      }
      empty.hidden = true;

      list.forEach((product, index) => {
        const card = document.createElement("article");
        card.className = "product-card";
        const safeUrl = product.url || "#";
        const hasLink = Boolean(product.url);

        card.innerHTML = `
         <div class="product-photo">
  <span class="product-index">${String(index + 1).padStart(2, "0")}</span>

  <a href="${safeUrl}"
     ${hasLink ? 'target="_blank" rel="sponsored noopener noreferrer"' : 'aria-disabled="true"'}
     class="product-image-link">

    <img src="${product.image || placeholder(product.name)}"
         alt="${product.name}"
         loading="lazy">

  </a>

  <button class="heart-btn"
          type="button"
          aria-label="Save ${product.name}"
          title="Save this item">♡</button>
</div>


          <div class="product-info">
            <span class="product-category">${product.category || "FIND"}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-bottom">
              <span class="price">${product.price || ""}</span>
              <a class="shop-button ${hasLink ? "" : "disabled"}" href="${safeUrl}" ${hasLink ? 'target="_blank" rel="sponsored noopener noreferrer"' : 'aria-disabled="true"'}>${hasLink ? "SHOP NOW ↗" : "ADD LINK →"}</a>
            </div>
          </div>
        `;

        const heart = card.querySelector(".heart-btn");
        const key = `saved-${product.name}`;
        if (localStorage.getItem(key) === "yes") heart.classList.add("saved");
        heart.addEventListener("click", () => {
          const saved = heart.classList.toggle("saved");
          localStorage.setItem(key, saved ? "yes" : "no");
          heart.textContent = saved ? "♥" : "♡";
        });

        grid.appendChild(card);
      });
    }

    function filtered() {
      const q = (search?.value || "").toLowerCase().trim();
      let result = products.filter(p => `${p.name} ${p.category} ${p.description}`.toLowerCase().includes(q));
      const mode = sort?.value;
      if (mode === "az") result.sort((a, b) => a.name.localeCompare(b.name));
      if (mode === "za") result.sort((a, b) => b.name.localeCompare(a.name));
      render(result);
    }

    search?.addEventListener("input", filtered);
    sort?.addEventListener("change", filtered);
    render(products);
  }

  // Home fate button
  const fateButton = document.getElementById("fateButton");
  const fateResult = document.getElementById("fateResult");
  if (fateButton && fateResult) {
    const fates = [
      ["Your fate says…", "Bridgerton Vinatge gowns. Obviously. 🎀", "bridgerton.html"],
      ["Your fate says…", "You need a dramatic wig. Immediately. 💇‍♀️", "wigs.html"],
      ["Your fate says…", "Main-character cosplay is calling. 🎭", "cosplay.html"],
      ["Your fate says…", "A new dress has entered the plot. 👗", "dresses.html"],
      ["Your fate says…", "It's the tiny accessories that will ruin your budget. 💎", "accessories.html"]
      ["Your fate says…", "Sweet charms are calling for you .♡♡♡", "keychains.html"]
    ];
    fateButton.addEventListener("click", () => {
      const [lead, text, url] = fates[Math.floor(Math.random() * fates.length)];
      fateResult.innerHTML = `<small>${lead}</small><strong>${text}</strong><a href="${url}">open the file →</a>`;
      fateResult.classList.remove("fate-pop");
      void fateResult.offsetWidth;
      fateResult.classList.add("fate-pop");
    });
  }

  // Subtle mouse glow on desktop
  if (!window.matchMedia("(pointer: coarse)").matches) {
    document.addEventListener("pointermove", e => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    });
  }
});
