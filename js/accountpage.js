import{Account,User} from  "./entities/Account.js";

let user = JSON.parse(localStorage.getItem("uAccount"));
console.log(user);
let toHome=document.getElementsByTagName("img");
toHome[0].addEventListener('click',()=>{
  window.location.href="./index.html";
});
let reg=document.getElementById("toRegistration");
reg.addEventListener("click",()=>{
  window.location.href="./registration.html";
})
let account=new User(user.email,user.password,user.userName);
account.getInfo();




