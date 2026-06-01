import {Product} from "./entities/Product.js";
import {Category} from "./entities/Category.js";
import {Cart} from "./entities/Cart.js";
const newElements=localStorage.getItem("category_list");
let List=JSON.parse(newElements) || [];
let newList=[];
let visible = null;
let show = null;
for(let a of List){
  let b=new Category(a.name);
  newList.push(b);
}
for (let b of newList) {
  if (b.isShowing === true) {
    console.log(b);
    visible = new Category(b.name);
    break;
  }
}

if (visible) {
  console.log(visible.products);
    for (let a of visible.products) {
      console.log(a.isSelected);
       if(a.isSelected){
         show = new Product(a.name, a.image, a.price, a.discount, a.description);
         show.getInfo();
         console.log(show);
         a.isBuying = false;
         break;
       }

      }


}
let toCart=document.getElementById("toCart");
toCart.addEventListener("click",()=>{
  let cart=new Cart();
  cart.addFavorite(show);
  cart.saveFavorite();
})

