import {Product} from "./entities/Product.js";
import {Category} from "./entities/Category.js";
import{Cart} from "./entities/Cart.js";
let noCategory = new Category("no_category");
let football = new Category("Football");
let volleyball = new Category("Volleyball");
let basketball = new Category("Basketball");
let hockey = new Category("Hockey");
export let listCategory = [noCategory, football, volleyball, basketball, hockey];
let product = null;
for (let i = 0; i < 50; i++) {
  product = new Product("hello");
  football.addProduct(product);
  product.generate();

}
generateList();
let cart = new Cart();
cart.addFavorite(football.products[2]);
cart.saveFavorite();


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
        localStorage.setItem("category_list", JSON.stringify(listCategory));
        i.clearCategory();
        i.generateCategory();
      });
    }

  }


}









