export class Product {
  name;
  image;
  price;
  discount;
  description;
  isBuying ;

  constructor(name = "undefined",
              image = "https://th.bing.com/th/id/OIP.nepaboJStUxL31XKSpKcxQHaHa?w=161&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
              price = 0,
              discount = 0,
              description = "undefined") {

    this.name = name;
    this.image = image;
    this.price = price;
    this.discount = discount;
    this.description = description;
  }

  // ==================== СЕРИАЛИЗАЦИЯ ====================
  toJSON() {
    return {
      name: this.name,
      image: this.image,
      price: this.price,
      discount: this.discount,
      description: this.description,
      isBuying: this.isBuying,

    };
  }

  static fromJSON(data) {
    if (!data) return null;
    const product = new Product(
      data.name,
      data.image,
      data.price,
      data.discount,
      data.description
    );
    product.isBuying = !!data.isBuying;
    return product;
  }

  // ==================== МЕТОДЫ ====================
  generate() {
    let productsContainer = document.getElementById("products");
    if (!productsContainer) return;

    let card = document.createElement("div");
    card.className = "product-card";

    let title = document.createElement("p");
    title.textContent = this.name;
    title.id = "title";

    let img = document.createElement("img");
    img.src = this.image;
    img.style.width = "60%";
    img.style.borderRadius = "5px";

    let priceEl = document.createElement("p");
    priceEl.textContent = this.price;
    priceEl.id = "value";

    let discountEl = document.createElement("p");
    discountEl.textContent = "-" + this.discount + "%";
    discountEl.id = "offer";
    discountEl.style.position = "relative";
    discountEl.style.top = "-100px";
    discountEl.style.left = "50px";

    let buyBtn = document.createElement("button");
    buyBtn.id = "add";
    buyBtn.textContent = "Buy";
    buyBtn.addEventListener("click", () => {
      window.location.href = "./buyproduct.html";
      this.isBuying = true;
      this.toJSON();
    });

    // стили карточки
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.justifyContent = "space-between";
    card.style.alignItems = "center";
    card.style.width = "200px";
    card.style.background = "#87DD91";
    card.style.border = "2px solid #569C60";
    card.style.borderRadius = "5px";
    card.style.margin = "5px";

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(priceEl);
    card.appendChild(discountEl);
    card.appendChild(buyBtn);

    productsContainer.appendChild(card);
  }

  getInfo() {
    let cardContainer = document.getElementsByClassName("card")[0];
    if (!cardContainer) return;

    cardContainer.innerHTML = "";

    let infoDiv = document.createElement("div");
    infoDiv.id = "information";

    let title = document.querySelector("h1") || document.createElement("h1");
    title.textContent = this.name;

    let img = document.createElement("img");
    img.src = this.image;
    img.id = "imgInfo";let priceEl = document.createElement("p");
    priceEl.textContent = this.price;
    priceEl.id = "priceInfo";

    let discountEl = document.createElement("p");
    discountEl.textContent = "-" + this.discount + "%";
    discountEl.id = "discountInfo";

    let descEl = document.createElement("p");
    descEl.textContent = this.description;
    descEl.id = "descriptionInfo";

    infoDiv.appendChild(img);
    infoDiv.appendChild(priceEl);
    infoDiv.appendChild(discountEl);
    infoDiv.appendChild(descEl);

    cardContainer.appendChild(infoDiv);
  }
  getFavourites() {
    let c = document.getElementById("favourite_cards");
    if (!c) return;

    c.innerHTML = "";
    let cardF = document.createElement("div");
    cardF.className = "product-card";

    let titleF = document.createElement("p");
    titleF.textContent = this.name;
    titleF.id = "title";

    let imgF = document.createElement("img");
    imgF.src = this.image;
    imgF.style.width = "60%";
    imgF.style.borderRadius = "5px";

    let priceElF = document.createElement("p");
    priceElF.textContent = this.price;
    priceElF.id = "value";

    let discountElF = document.createElement("p");
    discountElF.textContent = "-" + this.discount + "%";
    discountElF.id = "offer";
    discountElF.style.position = "relative";
    discountElF.style.top = "-100px";
    discountElF.style.left = "50px";
    cardF.appendChild(titleF);
    cardF.appendChild(imgF);
    cardF.appendChild(priceElF);
    cardF.appendChild(discountElF);

    c.appendChild(cardF);
  }
}

