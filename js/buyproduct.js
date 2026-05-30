import {Product} from "./entities/Product.js";
import{Category} from "./entities/Category.js";
import {listCategory} from "./app.js";
let visible=null;
let show;
for(let a of listCategory){
  if(a.isShowing===true){
    visible=new Category(a.name,a.products);
    console.log(visible);
    break;
  }
}
if(visible){
  for(let a of visible.products){
    if(a.isBuying===true){
      show=new Product(a.name,a.image,a.price,a.discount,a.description);
      show.getInfo();
      console.log(show);
      break;
    }
    a.isBuying=false;
  }
}

