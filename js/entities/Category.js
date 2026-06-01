import { Product } from './Product.js';

export class Category {
  name;
  products = [];
  isShowing = false;

  constructor(name = "category") {
    this.name = name;
  }

  // ==================== СЕРИАЛИЗАЦИЯ ====================
  toJSON() {
    return {
      name: this.name,
      isShowing: this.isShowing,
      products: this.products.map(product => product.toJSON())
    };
  }

  static fromJSON(data) {
    if (!data) return null;
    const category = new Category(data.name);
    category.isShowing = !!data.isShowing;

    if (data.products && Array.isArray(data.products)) {
      category.products = data.products.map(p => Product.fromJSON(p));
    }
    return category;
  }

  // ==================== МЕТОДЫ ====================
  addProduct(product) {
    if (product instanceof Product) {
      this.products.push(product);
    }
  }

  Visible() {
    this.isShowing = true;
  }

  clearCategory() {
    const container = document.getElementById("products");
    if (container) container.innerHTML = "";
  }

  generateCategory() {
    for (let product of this.products) {
      const p = new Product(
        product.name,
        product.image,
        product.price,
        product.discount,
        product.description
      );
      p.generate();
    }
  }
}



