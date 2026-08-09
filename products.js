/*
  ============================================================
  JIYA'S SWEETHEART — PRODUCT EDITOR
  ============================================================

  THIS is the main file you edit when adding products.

  For every product:
    - name: what visitors see
    - category: tiny label above the name
    - description: short description
    - image: path to YOUR product image
    - url: your Amazon Associates affiliate URL
    - price: optional text such as "$19–$29" or "₹1,599"

  Example:
    image: "assets/products/bridgerton-gown.jpg",
    url: "PASTE YOUR AFFILIATE LINK HERE",

  If image is empty, the site automatically shows a pretty placeholder.
*/

const STORE = {
  bridgerton: [
    { name:"Regency Gown", category:"THE DRESS", description:"Empire-waist satin gown for the full promenade silhouette.", image:"dress.png", url:"https://link.amazon/B045IDxfn", price:"" },
    { name:"Regency Gown", category:"THE DRESS", description:"Empire-waist satin gown for the full promenade silhouette.", image:"https://m.media-amazon.com/images/I/61aPt41pBCL._SX679_.jpg", url:"https://link.amazon/B069JKXko", price:"" },
    { name:"Regency Gown", category:"THE DRESS", description:"Empire-waist satin gown for the full promenade silhouette.", image:"dress2.png", url:"https://link.amazon/B0ghoOJqE", price:"" },
   { name:"Regency Gown", category:"THE DRESS", description:"Empire-waist satin gown for the full promenade silhouette.", image:"https://m.media-amazon.com/images/I/61QZfZH+AHL._SX522_.jpg", url:"https://link.amazon/B0aPzZtIS", price:"" },
    { name:"Regency Gown", category:"THE DRESS", description:"Empire-waist satin gown for the full promenade silhouette.", image:"https://m.media-amazon.com/images/I/61jYrc9Pp9L._SX522_.jpg", url:"https://link.amazon/B0hsckDo4", price:"" },
    { name:"Pearl Necklace", category:"JEWELRY", description:"Delicate necklace to soften the neckline.", image:"https://m.media-amazon.com/images/I/516J6dzgtPL._SY395_.jpg", url:"https://link.amazon/B0hhNYnyy", price:"" },
    { name:"Silver Necklace", category:"JEWELRY", description:"Delicate necklace to soften the neckline.", image:"https://m.media-amazon.com/images/I/61qOG0oAmSL._SY500_.jpg", url:"https://link.amazon/B05FVIZCF", price:"" },
    { name:"Opera Gloves", category:"ACCESSORY", description:"white satin gloves for instant Regency drama.", image:"https://m.media-amazon.com/images/I/51iPt7px0lL._SX522_.jpg", url:"https://link.amazon/B0h4uG4xW", price:"add price" },
    { name:"Regency Lace Heels", category:"SHOES", description:"Romantic heels with a vintage-inspired finish.", image:"https://m.media-amazon.com/images/I/81ddCeHKIhL._SY500_.jpg", url:"https://link.amazon/B06NYmOVm", price:"" },
    { name:"Embellished Heels", category:"SHOES", description:"Exquisite beaded lace heels.", image:"https://m.media-amazon.com/images/I/71SV5alXdPL._SY575_.jpg", url:"https://link.amazon/B0f6dckg7", price:"" },
    { name:"Pearl Silver Tiara", category:"HEADPIECE", description:"A sparkling little crown for your Diamond moment.", image:"https://m.media-amazon.com/images/I/51nJULC4ewL._SY500_.jpg", url:"https://link.amazon/B0i7pPhYZ", price:"" },
    { name:"Golden Rhinestone Tiara", category:"HEADPIECE", description:"A sparkling little crown for your Diamond moment.", image:"https://m.media-amazon.com/images/I/714CA--c7VL._SY500_.jpg", url:"https://link.amazon/B0eXPHYvQ", price:"" },
    { name:"Lace Parasol", category:"ACCESSORY", description:"A dreamy finishing piece for promenade photos.", image:"https://m.media-amazon.com/images/I/71t8ZYn731L._SX522_.jpg", url:"https://link.amazon/B0bjTXeey", price:"" }
  ],

  wigs: [
    { name:"Character Wig 01", category:"COSPLAY WIG", description:"Replace this with your wig description.", image:"", url:"", price:"add price" },
    { name:"Character Wig 02", category:"COSPLAY WIG", description:"Replace this with your wig description.", image:"", url:"", price:"add price" },
    { name:"Long Fantasy Wig", category:"FANTASY HAIR", description:"Replace this with your wig description.", image:"", url:"", price:"add price" },
    { name:"Soft Romantic Wig", category:"ROMANTIC", description:"Replace this with your wig description.", image:"", url:"", price:"add price" }
  ],

  dresses: [
    { name:"Regency Gown", category:"THE DRESS", description:"Empire-waist satin gown for the full promenade silhouette.", image:"dress.png", url:"https://link.amazon/B045IDxfn", price:"" },
    { name:"Regency Gown", category:"THE DRESS", description:"Empire-waist satin gown for the full promenade silhouette.", image:"https://m.media-amazon.com/images/I/61aPt41pBCL._SX679_.jpg", url:"https://link.amazon/B069JKXko", price:"" },
    { name:"Regency Gown", category:"THE DRESS", description:"Empire-waist satin gown for the full promenade silhouette.", image:"dress2.png", url:"https://link.amazon/B0ghoOJqE", price:"" },
    { name:"Regency Gown", category:"THE DRESS", description:"Empire-waist satin gown for the full promenade silhouette.", image:"https://m.media-amazon.com/images/I/61jYrc9Pp9L._SX522_.jpg", url:"https://link.amazon/B0hsckDo4", price:"" },
    { name:"Regency Gown", category:"THE DRESS", description:"Empire-waist satin gown for the full promenade silhouette.", image:"https://m.media-amazon.com/images/I/61QZfZH+AHL._SX522_.jpg", url:"https://link.amazon/B0aPzZtIS", price:"" },
    { name:"Dreamy Dress 01", category:"DRESS", description:"Replace this with your product description.", image:"", url:"", price:"add price" },
    { name:"Dreamy Dress 02", category:"DRESS", description:"Replace this with your product description.", image:"", url:"", price:"add price" },
    { name:"Vintage-Inspired Dress", category:"VINTAGE", description:"Replace this with your product description.", image:"https://m.media-amazon.com/images/I/616aB6prwCL._SX522_.jpg", url:"https://link.amazon/B0drfcnKs", price:"add price" },
    { name:"Party Dress", category:"STATEMENT", description:"Replace this with your product description.", image:"", url:"", price:"add price" }
  ],

  cosplay: [
    { name:"Cosplay Costume", category:"COSTUME", description:"Replace this with your costume description.", image:"", url:"", price:"add price" },
    { name:"Character Prop", category:"PROP", description:"Replace this with your prop description.", image:"", url:"", price:"add price" },
    { name:"Cosplay Shoes", category:"SHOES", description:"Replace this with your shoe description.", image:"", url:"", price:"add price" },
    { name:"Character Accessory", category:"DETAIL", description:"Replace this with your accessory description.", image:"", url:"", price:"add price" }
  ],

  accessories: [
    { name:"Pearl Necklace", category:"JEWELRY", description:"Delicate necklace to soften the neckline.", image:"https://m.media-amazon.com/images/I/516J6dzgtPL._SY395_.jpg", url:"https://link.amazon/B0hhNYnyy", price:"" },
    { name:"Silver Necklace", category:"JEWELRY", description:"Delicate necklace to soften the neckline.", image:"https://m.media-amazon.com/images/I/61qOG0oAmSL._SY500_.jpg", url:"https://link.amazon/B05FVIZCF", price:"" },
    { name:"Opera Gloves", category:"ACCESSORY", description:"white satin gloves for instant Regency drama.", image:"https://m.media-amazon.com/images/I/51iPt7px0lL._SX522_.jpg", url:"https://link.amazon/B0h4uG4xW", price:"add price" },
    { name:"Regency Lace Heels", category:"SHOES", description:"Romantic heels with a vintage-inspired finish.", image:"https://m.media-amazon.com/images/I/81ddCeHKIhL._SY500_.jpg", url:"https://link.amazon/B06NYmOVm", price:"" },
    { name:"Pearl Tiara", category:"HEADPIECE", description:"A sparkling little crown for your Diamond moment.", image:"https://m.media-amazon.com/images/I/51nJULC4ewL._SY500_.jpg", url:"https://link.amazon/B0i7pPhYZ", price:"" },
    { name:"Lace Parasol", category:"ACCESSORY", description:"A dreamy finishing piece for promenade photos.", image:"https://m.media-amazon.com/images/I/71t8ZYn731L._SX522_.jpg", url:"https://link.amazon/B0bjTXeey", price:"" },
    { name:"Pearl Earrings", category:"JEWELRY", description:"Replace this with your product description.", image:"", url:"", price:"add price" },
    { name:"Statement Necklace", category:"JEWELRY", description:"Replace this with your product description.", image:"", url:"", price:"add price" },
    { name:"Satin Ribbon Gloves", category:"GLOVES", description:" Satin Gloves with Bow & Pearl Embellishment.", image:"https://m.media-amazon.com/images/I/61mCDHqRFEL._SX522_.jpg", url:"https://link.amazon/B07FH54U6" },
    { name:"Pretty Heels", category:"SHOES", description:"Replace this with your product description.", image:"", url:"", price:"add price" },
    { name:"Tiara", category:"HEADPIECE", description:"Replace this with your product description.", image:"", url:"", price:"add price" }
  ]
};
