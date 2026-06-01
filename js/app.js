import {Product} from "./entities/Product.js";
import {Category} from "./entities/Category.js";
import{Cart} from "./entities/Cart.js";
let noCategory = new Category("no_category");
let football = new Category("Football");
let volleyball = new Category("Volleyball");
let basketball = new Category("Basketball");
let hockey = new Category("Hockey");
export let listCategory=[];
let product = null;
for (let i = 0; i < 50; i++) {
  product = new Product("hello");
  football.addProduct(product);
  product.generate();

}

listCategory.push(noCategory.toJSON());
listCategory.push(football.toJSON());
listCategory.push(volleyball.toJSON());
listCategory.push(basketball.toJSON());
listCategory.push(hockey.toJSON());
generateList();

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
        localStorage.setItem("category_list", JSON.stringify(listCategory));

        console.log(listCategory);
        i.clearCategory();
        i.generateCategory();
      });
    }

  }


}









