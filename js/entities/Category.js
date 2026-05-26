import{Product} from './Product.js';
export class Category{
  name;
  products=[];
  constructor(name="category",...args) {
    try{
      for (let i=0; i<args.length; i++){
        this.products.push(args[i]);
      }
      this.name = localStorage.getItem("category_name");
      const elements=localStorage.getItem("category_products");
      this.products = JSON.parse(elements) || [];


    }
    catch(err){
      alert("Not Found!");
    }



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
  saveCategory() {
     localStorage.setItem("category_name",this.name);
     localStorage.setItem("category_products",JSON.stringify(this.products));
  }
  addProduct(product){
    if(product instanceof Product){
      this.products.push(product);
      this.saveCategory();

    }

  }



}
