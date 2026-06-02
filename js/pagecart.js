import{Cart} from "./entities/Cart.js";
import{Product} from "./entities/Product.js";
let product = new Product();
let cart = new Cart();
Cart.loadCart();
cart.addFavorite(product);
cart.saveFavorite();
