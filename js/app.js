import{Product} from "./entities/Product.js";
import{Category} from "./entities/Category.js";
import {name, isReady,price,description,discount,url} from "./form";
const category=new Category();
document.getElementById("addBtn").addEventListener("click", () => {
  window.location.href="./form.html";
})
if (isReady){
  const product = new Product(name,url,price,discount,description);
  category.addProduct(product);
  product.generate();
}






