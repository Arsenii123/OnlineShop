import{Product} from "./Product.js";
export class Cart {
  products=[];
  category;
  total=0;
  constructor() {
  }
  addFavorite(product){
    document.cookie="name="+product.name+"img="+product.image+"price="+product.price+"discount="+product.discount+"description="+product.description;
  }
  saveFavorite(){
    const name="name=";
    const img="img=";
    const price="price=";
    const discount="discount=";
    const description="description=";
    const content=document.cookie.split(";");
    let product=new Product();
    for(let i of content){
      i.trim();
      if(i.startsWith(name)){
        let n=document.cookie.substring(name.length);
        product.name=n+"";
      }
      else if(i.startsWith(img)){
        let im=document.cookie.substring(name.length,img.length);
        product.image=im+"";
      }
      else if(i.startsWith(price)){
        let p=document.cookie.substring(img.length,price.length);
        product.price=p+"";
      }
      else if(i.startsWith(discount)){
        let d=document.cookie.substring(price.length,discount.length);
        product.discount=d+"";
      }
      else if(i.startsWith(description)){
        let d=document.cookie.substring(discount.length,description.length);
        product.description=d+"";
      }
    }
    console.log(product);
    this.products.push(product);
    localStorage.setItem("cart", JSON.stringify(this.products));


  }
  generateCart(){

  }
}
