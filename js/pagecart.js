import{Cart} from "./entities/Cart.js";
import{Product} from "./entities/Product.js";
let cart= Cart.loadCart();
console.log(cart.products);
for(let a of cart.products){
  a.getFavourites();
}
let back = document.getElementById("home");
let remove = document.getElementById("delete");
back.addEventListener("click", ()=>{
  window.location.href = "./index.html";
});
remove.addEventListener("click", ()=>{
  cart.removeFavorite();
});


