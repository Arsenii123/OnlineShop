import{Product} from './Product.js';
export class Category{
  name;
  products=[];
  constructor(name="category",...args) {
    this.name = name;
    for (let i=0; i<args.length; i++){
      this.products.push(...args[i]);
    }
  }
  generateCategory(){


      let c=document.getElementById("products");
      c.innerHTML="";
      for(let i in this.products){
        i.generate();
      }


  }
  addProduct(product){
    if(product===Product){
      this.products.push(product);
    }

  }



}
