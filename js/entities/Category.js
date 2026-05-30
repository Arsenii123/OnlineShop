import{Product} from './Product.js';
export class Category{
  name;
  products=[];
  isShowing;
  constructor(name="category",...args) {
    this.saveCategory(name, ...args);

      for (let i=0; i<args.length; i++){
        this.products.push(args[i]);
      }
      this.name = localStorage.getItem("category_name");
      if(args.length > 0){
        const elements=localStorage.getItem("category_products");
        this.products = JSON.parse(elements) || [];
      }





    this.isShowing=false;

  }
  clearCategory(){
      let c=document.getElementById("products");
      c.innerHTML="";

  }
  generateCategory(){
      for(let p of this.products){

        const elements=new Product(p.name,p.image,p.price,p.discount,p.description);
        elements.generate();




      }
  }
  saveCategory(name,...args) {
     localStorage.setItem("category_name",name);
     localStorage.setItem("category_products",JSON.stringify(...args));



  }
  addProduct(product){
    if(product instanceof Product){
      this.products.push(product);
      this.saveCategory(this.name,this.products);

    }

  }



}
