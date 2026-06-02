import {Product} from "./entities/Product.js";
import {Category} from "./entities/Category.js";
import {Cart} from "./entities/Cart.js";


// Получаем данные из localStorage
const savedData = localStorage.getItem("category_list");
let List = [];

if (savedData) {
  const parsed = JSON.parse(savedData);

  List = parsed.map(catData => Category.fromJSON(catData));
  console.log(List);
}

let visible = null;
let selectedProduct = null;

for (let category of List) {
  if (category.isShowing) {
    visible = category;
    break;
  }
}

if (visible) {
  // Ищем выбранный товар
  for (let product of visible.products) {
    console.log(product);
    if (product.isBuying===true) {
      selectedProduct = product;
      // Можно дополнительно вызвать getInfo() если нужно
      selectedProduct.getInfo();
      break;
    }
  }
}


const toCart = document.getElementById("toCart");
toCart?.addEventListener("click", () => {
  if (selectedProduct) {
    const cart = new Cart();
    cart.addFavorite(selectedProduct);
    cart.saveFavorite();
    alert("Товар добавлен в корзину!"); // для теста
    window.location.href = "./index.html";
  }
});
