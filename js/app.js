import {Product} from "./entities/Product.js";
import {Category} from "./entities/Category.js";
const elements = localStorage.getItem("list_category");
let listCategory = JSON.parse(elements) || [];
let noCategory = new Category();
let category = null;
if (localStorage.getItem("selectedCategory") === null) {
  localStorage.setItem("selectedCategory", "no");
}
let isMain=localStorage.getItem("selectedCategory");


document.getElementById("addBtn").addEventListener("click", () => {
  window.location.href = "./form.html";
});
document.getElementById("no-category").addEventListener("click", () => {
  localStorage.setItem("selectedCategory", "no");
})

generateList();
moveToCategory();



localStorage.setItem("list_category", JSON.stringify(listCategory));
const element = localStorage.getItem("select");
category = JSON.parse(element) || [];
let current=new Category(category.name,category.products);
 if (isMain === "no") {
  noCategory.clearCategory();
  noCategory.generateCategory();
 }else{
   current.clearCategory();
   current.generateCategory();
 }


if (Boolean(localStorage.getItem("ready")) === true) {
  let name = localStorage.getItem("inName");
  let description = localStorage.getItem("inDescription");
  let price = Number(localStorage.getItem("inPrice"));
  let url = localStorage.getItem("url");
  let discount = Number(localStorage.getItem("inDiscount"));
  if (name && description && price && discount) {
    let product = new Product(name, url, price, discount, description);
    if (isMain === "no") {
      noCategory.addProduct(product);
    } else {
      current.addProduct(product);

    }
    product.generate();


  }
  localStorage.removeItem("ready");

}

document.getElementById("clearBtn").addEventListener("click", () => {
  localStorage.removeItem("category_products"); // чистим массив
  category.products = []; // сбрасываем в памяти
  category.generateCategory(); // перерисовываем пустой список
});


document.getElementById("addCategory").addEventListener("click", () => {
  addCategory();

});

function addCategory() {
  name = prompt("Name of category:");
  let c = document.getElementById("names");
  let p = document.createElement("p");
  p.id = "name-of-category";
  p.textContent = name;
  const category = new Category();
  category.name = name;
  listCategory.push(category);
  localStorage.setItem("list_category", JSON.stringify(listCategory));
  c.appendChild(p);

}

function generateList() {
  for (let i of listCategory) {
    let c = document.getElementById("names");
    let p = document.createElement("p");
    p.classList.add("name-of-category");
    p.textContent = i.name;
    c.appendChild(p);
  }
  // document.getElementById("clearCategories").addEventListener("click", () => {
  //   // Удаляем сохранённые категории из localStorage
  //   localStorage.removeItem("list_category");
  //
  //   // Очищаем массив в памяти
  //   listCategory = [];
  //
  //   // Очищаем контейнер на странице
  //   const container = document.getElementById("names");
  //   container.innerHTML = "";
  //
  //   console.log("Все категории удалены");
  // });

}
function moveToCategory() {
  let a = document.querySelectorAll(".name-of-category");
  for (let items = 0; items < a.length; items++) {
    a[items].addEventListener("click", () => {

      let text = a[items].textContent;
      for (let p of listCategory) {
        if (p.name === text) {
          let category = new Category(p.name, p.products);

          localStorage.setItem("select", JSON.stringify(category));
        }
      }
      localStorage.setItem("selectedCategory", "selected");



    });


  }
}








