import { Product } from "./Product.js";

export class Cart {
  products = [];

  addFavorite(product) {
    if (product instanceof Product) {
      this.products.push(product);
    }
  }

  saveFavorite() {
    localStorage.setItem("cart", JSON.stringify(
      this.products.map(p => p.toJSON())
    ));
    console.log("Корзина сохранена в localStorage");
  }

  // загрузка из localStorage
  static loadCart() {
    const saved = localStorage.getItem("cart");
    if (!saved) return new Cart();

    const cart = new Cart();
    const parsed = JSON.parse(saved);
    cart.products = parsed.map(p => Product.fromJSON(p));
    return cart;
  }
}
