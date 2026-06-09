import {Account,User} from "./entities/Account.js";
let account = new Account();
function Create(){
  let user = new User();
  account=user;
  if(account instanceof User){
      account.createUser();
      localStorage.setItem("uAccount",JSON.stringify(account));
      console.log(account);

  }


}
let back = document.getElementById("toHome");
back.addEventListener("click", ()=>{
  window.location.href = "./index.html";
});
let add =document.getElementById("singUp");
add.addEventListener("submit",(e)=>{
  e.preventDefault();
  Create();
  window.location.href = "./index.html";
})

