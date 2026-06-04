import {Product} from "./entities/Product.js";
import {Cart} from "./entities/Cart.js";
const raw = localStorage.getItem("selectedProduct");
let selectedProduct;
if (raw) {
  const obj = JSON.parse(raw);
  const product = Product.fromJSON(obj);
  selectedProduct = Product.fromJSON(product);
  console.log(selectedProduct);
  product.getInfo();
  console.log(product);
}

const toCart = document.getElementById("toCart");
toCart?.addEventListener("click", () => {
  if (selectedProduct!==null) {
    console.log(selectedProduct);
    const cart = Cart.loadCart();
    cart.addFavorite(selectedProduct);
    cart.saveFavorite();
    alert("Товар добавлен в корзину!"); // для теста
    window.location.href = "./index.html";
  }
});
function order(){
  return new Promise((resolve,reject) => {
    console.log("making order...");
    setTimeout(()=>{
    let chance = Math.random() * 100; // 0-100 - емуляція роботи з БД
    if (chance > 10) { // success
      resolve("order success");
    } else {
      reject("something went wrong!");
    }

  },1000)}).then((resolve,reject)=> {
    console.log("processing order...");
    setTimeout(() => {
      let chance = Math.random() * 100; // 0-100 - емуляція роботи з БД
      if (chance > 20) { // success
        resolve("process success");
      } else {
        reject("something went wrong while processing order!");
      }
    },2000)

  }).then((resolve,reject)=>{
    console.log("delivering order...");
    setTimeout(() => {
      let chance = Math.random() * 100; // 0-100 - емуляція роботи з БД
      if (chance > 30) { // success
        resolve("deliver success");
        window.location.href = "./index.html";
      } else {
        reject("something went wrong while delivering order!");
      }
    },3000)
  }).catch(()=>{
    window.location.href = "./index.html";
  })
}
