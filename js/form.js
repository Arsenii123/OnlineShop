import {Product} from "./entities/Product.js";
let isReady=false;
const bt=document.getElementById("add");
const c=document.getElementById("cancel");
if (c) {
  c.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
}
if(bt){
  bt.addEventListener("click", () => {

      let inName=document.getElementById("name").value ;
      let inUrl=document.getElementById("image").value ;
      let inDiscount=document.getElementById("discount").value ;
      let inPrice=document.getElementById("price").value ;
      let inDescription=document.getElementById("description").value ;
      if(inName  && inDiscount && inPrice && inDescription && inUrl) {
        localStorage.setItem("inName", inName);
        localStorage.setItem("inPrice", inPrice);
        localStorage.setItem("inDescription", inDescription);
        localStorage.setItem("inDiscount", inDiscount);
        localStorage.setItem("url", inUrl);

        isReady = true;
        localStorage.setItem("ready",isReady);
        window.location.href = "./index.html";


      }
  });
  }



