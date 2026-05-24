export let isReady=false;
export let name=document.getElementById("name").value;
export let url=document.getElementById("url").value;
export let discount=document.getElementById("discount").value;
export let price=document.getElementById("price").value;
export let description=document.getElementById("description").value;
document.getElementById("add").addEventListener("click", () => {
  window.location.href="./index.html";
  isReady=true;
});

