import {Product} from "./entities/Product.js";
import {Cart} from "./entities/Cart.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQCYiJRsepvVOZ6scV4puPcOKq7Jc0T6Y",
  authDomain: "finalprojectonlineshop.firebaseapp.com",
  databaseURL: "https://finalprojectonlineshop-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "finalprojectonlineshop",
  storageBucket: "finalprojectonlineshop.firebasestorage.app",
  messagingSenderId: "441429498689",
  appId: "1:441429498689:web:01d00545eea2dcdafc1fc0",
  measurementId: "G-1W6P830X99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let email=document.getElementById("email").value;
let address=document.getElementById("address").value;
let city=document.getElementById("city").value;
window.send = async () => {
  const text = email.value;
  const infoA=address.value;
  const infoC=city.value;
  if (!text || !infoA || !infoC) return;

  try {
    await addDoc(collection(db, "messages"), {
      email: text,
      address: address,
      city: city,
      createdAt: serverTimestamp()
    });
    email.value = '';
    address.value = '';
    city.value = '';
  } catch (err) {
    alert('Не вдалося відправити: ' + err.message);
  }
};
const raw = localStorage.getItem("selectedProduct");
let selectedProduct;
if (raw) {
  const obj = JSON.parse(raw);
  const product = Product.fromJSON(obj);
  selectedProduct = Product.fromJSON(product);
  console.log(selectedProduct);
  product.getInfo();
  console.log(product);
}

const toCart = document.getElementById("toCart");
toCart?.addEventListener("click", () => {
  if (selectedProduct !== null) {
    console.log(selectedProduct);
    const cart = Cart.loadCart();
    cart.addFavorite(selectedProduct);
    cart.saveFavorite();
    alert("Товар добавлен в корзину!"); // для теста
    window.location.href = "./index.html";
  }
});
let start=false;
let r = document.getElementById("makeOrder");
r.addEventListener("submit", (e) => {
  e.preventDefault();
  send();
  order();


});

function order() {
  return new Promise((resolve, reject) => {
    console.log("making order...");
    setTimeout(() => {
      let chance = Math.random() * 100; // 0-100 - емуляція роботи з БД
      if (chance > 10) { // success
        resolve("order success");
      } else {
        reject("something went wrong!");
      }

    }, 1000)
  }).then(result => {
    console.log(result);
    return new Promise((resolve, reject) => {
      console.log("processing order...");
      setTimeout(() => {
        let chance = Math.random() * 100; // 0-100 - емуляція роботи з БД
        if (chance > 20) { // success
          resolve("process success");
        } else {
          reject("something went wrong while processing order!");
        }
      }, 2000)
    });
  }).then(result => {
    console.log(result);
    return new Promise((resolve, reject) => {
      console.log("delivering order...");
      setTimeout(() => {
        let chance = Math.random() * 100; // 0-100 - емуляція роботи з БД
        if (chance > 30) { // success
          resolve("deliver success");
        } else {
          reject("something went wrong while delivering order!");
        }
        window.location.href = "./index.html";
      }, 3000)
    });

  }).catch(() => {
    window.location.href = "./index.html";
  });


}
