import{Product} from "./entities/Product.js";
import{Category} from "./entities/Category.js";
const category = new Category();
category.generateCategory();
document.getElementById("addBtn").addEventListener("click", () => {
  const product = new Product();
  product.generate();
  category.addProduct(product);
});

