import {Product} from "./entities/Product.js";
import {Category} from "./entities/Category.js";

let noCategory = new Category("no_category");
noCategory.isShowing = true;
let football = new Category("Football");
let volleyball = new Category("Volleyball");
let basketball = new Category("Basketball");
let hockey = new Category("Hockey");
let visits = Number(getVisit()) || 0;
export let listCategory = [];
let product = null;
for (let i = 0; i < 50; i++) {
  let random = Math.floor(Math.random() * 5);
  let rp=Math.floor(Math.random() * (999-100+1)+1);
  let rd=Math.floor(Math.random() * 25);
  switch (random) {
    case 0:
      product = new Product("football shirt", "https://s3.eu-central-1.amazonaws.com/media.sportmonda.com/seo/craft-1.webp", rp, rd, "blue football kit");
      football.addProduct(product);
      product.generate();
      break;
    case 1:
      product = new Product("ball", "https://i.ebayimg.com/images/g/b~QAAOSwUhFlXdIv/s-l1200.jpg", rp, rd, "ball euro2024");
      football.addProduct(product);
      product.generate();
      break;
    case 2:
      product = new Product("boots", "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B56176s.jpg?im=Resize,width=750", rp, rd, "Nike boots");
      football.addProduct(product);
      product.generate();
      break;
    case 4:
      product = new Product("slip-in shin guards", "https://img.fruugo.com/product/4/38/1911109384_0340_0340.jpg", rp, rd, "Slipe-in shin guards for yourself care");
      football.addProduct(product);
      product.generate();
      break;
  }


}
for (let i = 0; i < 50; i++) {
  let random = Math.floor(Math.random() * 5);
  let rp=Math.floor(Math.random() * (999-100+1)+1);
  let rd=Math.floor(Math.random() * 25);
  switch (random) {
    case 0:
      product = new Product("volleyball kit", "https://www.houseofscreens.in/cdn/shop/files/HX11VB_61154307-06c4-47fd-aea2-c66fa0619fd1.png?v=1729155772", rp, rd, "blue football kit");
      volleyball.addProduct(product);
      product.generate();
      break;
    case 1:
      product = new Product("ball", "https://giftandbag.bg/userfiles/productlargeimages/product_5069.jpg", rp, rd, "ball euro2024");
      volleyball.addProduct(product);
      product.generate();
      break;
    case 2:
      product = new Product("shoes", "https://cdn11.bigcommerce.com/s-irb16l/images/stencil/500x659/products/2479/16828/1071A124_100_SR_RT_GLB__26485.1776273431.jpg?c=2", rp, rd, "Nike boots");
      volleyball.addProduct(product);
      product.generate();
      break;
    case 4:
      product = new Product("knee pads", "https://cdn.media.amplience.net/i/frasersdev/76029227_o.jpg?v=20240417082012", rp, rd, "Slipe-in shin guards for yourself care");
      volleyball.addProduct(product);
      product.generate();
      break;
  }


}
for (let i = 0; i < 50; i++) {
  let random = Math.floor(Math.random() * 5);
  let rp=Math.floor(Math.random() * (999-100+1)+1);
  let rd=Math.floor(Math.random() * 25);
  switch (random) {
    case 0:
      product = new Product("basketball kit", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-CHsVzHrGBOXWjlrL5imgPI5vFE1iw7Qog&s", rp, rd, "blue football kit");
      basketball.addProduct(product);
      product.generate();
      break;
    case 1:
      product = new Product("ball", "https://www.prodirectsport.com/cdn/shop/files/1033536_gallery_1.jpg?v=1774346687&width=800", rp, rd, "ball euro2024");
      basketball.addProduct(product);
      product.generate();
      break;
    case 2:
      product = new Product("shoes", "https://m.media-amazon.com/images/I/51WXSLNPYcL._AC_UY900_.jpg", rp, rd, "Nike boots");
      basketball.addProduct(product);
      product.generate();
      break;
    case 4:
      product = new Product("hex knee pads", "https://www.basketballemotion.com/imagesarticulos/143807/grandes/rodillera-mcdavid-manga-elastica-hex-white-0.webp", rp, rd, "Slipe-in shin guards for yourself care");
      basketball.addProduct(product);
      product.generate();
      break;
  }


}
for (let i = 0; i < 50; i++) {
  let random = Math.floor(Math.random() * 5);
  let rp=Math.floor(Math.random() * (999-100+1)+1);
  let rd=Math.floor(Math.random() * 25);
  switch (random) {
    case 0:
      product = new Product("hockey kit", "https://m.media-amazon.com/images/I/61q9JLigR+L._AC_SX679_.jpg", rp, rd, "blue football kit");
      hockey.addProduct(product);
      product.generate();
      break;
    case 1:
      product = new Product("neck guard", "https://base360.ca/cdn/shop/files/NeckGuardFront_e9028fba-4f06-4bb3-aac6-813338d24542.png?v=1764193585&width=2048", rp, rd, "ball euro2024");
      hockey.addProduct(product);
      product.generate();
      break;
    case 2:
      product = new Product("mouthguard", "https://cdn.shopify.com/s/files/1/0891/7031/3561/files/102504005_1_1.jpg?v=1742388161", rp, rd, "Nike boots");
      hockey.addProduct(product);
      product.generate();
      break;
    case 4:
      product = new Product("hockey socks", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwj4XpOZxD6pBvrtkQ1VXpjsBmSkgvtBRdZA&s", rp, rd, "Slipe-in shin guards for yourself care");
      hockey.addProduct(product);
      product.generate();
      break;
  }


}
for (let i = 0; i < 50; i++) {
  let random = Math.floor(Math.random() * 5);
  let rp=Math.floor(Math.random() * (999-100+1)+1);
  let rd=Math.floor(Math.random() * 25);
  switch (random) {
    case 0:
      product = new Product("bottle", "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a125a96b-61cf-4725-9a3b-658dd163f409/NK+REFUEL+BTL+LOCK+LID+24+OZ.png", rp, rd, "blue football kit");
      noCategory.addProduct(product);
      product.generate();
      break;
    case 1:
      product = new Product("bag", "https://allforpadel.com/2627-large_default/adidas-stage-tour-sport-bag.jpg", rp, rd, "ball euro2024");
      noCategory.addProduct(product);
      product.generate();
      break;
    case 2:
      product = new Product("socks", "https://deployfootball.com/cdn/shop/files/Deploy-Grip-Socks-White_1200x.jpg?v=1774492099", rp, rd, "Nike boots");
      noCategory.addProduct(product);
      product.generate();
      break;
    case 4:
      product = new Product("skipping ropes", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0U6dKMOXzIVIh8Hw0teOrWpE_AmhTw3nrYA&s", rp, rd, "Slipe-in shin guards for yourself care");
      noCategory.addProduct(product);
      product.generate();
      break;
  }


}


addEventListener('load', () => {
    Visit();
  }
);
listCategory.push(noCategory);
listCategory.push(football);
listCategory.push(volleyball);
listCategory.push(basketball);
listCategory.push(hockey);
noCategory.clearCategory();
noCategory.generateCategory();
generateList();
let goToCart = document.getElementById("cart");
goToCart.addEventListener('click', () => {
  window.location.href = "./pagecart.html";
})
let f = document.getElementsByClassName("filter");
f[0].addEventListener('click', () => {
  filterList();
});
let a = document.getElementById("a-user");
a.addEventListener('click', () => {
  window.location.href = "./accountpage.html";
});

function generateList() {
  for (let i of listCategory) {
    let c = document.getElementById("names");
    let p = document.createElement("p");
    if (c) {
      p.classList.add("name-of-category");
      p.textContent = i.name;
      c.appendChild(p);
      p.addEventListener("click", () => {
        for (let a of listCategory) {
          a.isShowing = false;
        }
        i.Visible();
        console.log(listCategory);
        i.clearCategory();
        i.generateCategory();
      });
    }

  }


}

function Visit() {
  visits++;
  document.cookie = "visited=" + visits;
}

function getVisit() {
  let v = document.cookie.split(";");
  for (let i of v) {
    i = i.trim();
    if (i.startsWith("visited=")) {
      return i.substring("visited=".length);
    }
  }
}

function filterList() {
  let request = String(document.getElementById("filter-in").value);
  for (let i of listCategory) {
    if (i.isShowing === true) {
      let c = new Category();
      c.products = i.products.filter(p => p.name.startsWith(request) || p.name === request);
      if (c.products.length > 0) {
        c.clearCategory();
        c.generateCategory();
      } else {
        alert("Product Not Found!");
      }

    }
  }
}

console.log(visits);








