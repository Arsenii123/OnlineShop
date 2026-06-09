import {Product} from "./Product.js";

export class Cart {
  products = [];

  addFavorite(product) {
    if (product instanceof Product) {
      this.products.push(product);
    }
  }

  saveFavorite() {
    const right=this.products.filter(p=>p!==null);
    localStorage.setItem("cart", JSON.stringify(
      right.map(p =>
        p.toJSON()
      )
    ));
    console.log("Корзина сохранена в localStorage");
  }

  // загрузка из localStorage
  static loadCart() {
    const saved = localStorage.getItem("cart");
    if (!saved) return new Cart();

    const cart = new Cart();
    const parsed = JSON.parse(saved);
    cart.products = parsed
      .filter(p => p !== null)
      .map(p => Product.fromJSON(p));
    return cart;
  }

  removeFavorite() {
    let choice=Number(prompt("Enter number of products to delete:"));
    this.products.splice(choice, 1);
    this.saveFavorite();
    window.location.reload();


  }
}
