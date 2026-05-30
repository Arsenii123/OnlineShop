export class Product {
  name;
  image;
  price;
  discount;
  description;
  isBuying;

  constructor(name = "undefined", image = "https://th.bing.com/th/id/OIP.nepaboJStUxL31XKSpKcxQHaHa?w=161&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", price = 0, discount = 0, description = "undefined") {
    this.save(name, image, price, discount, description);
    this.name = localStorage.getItem("name");
    this.price = localStorage.getItem("price");
    this.discount = localStorage.getItem("discount");
    this.description = localStorage.getItem("description");
    this.image = localStorage.getItem("image");
    this.isBuying = false;


  }

  save(name, image, price, discount, description) {
    localStorage.setItem("name", name);
    localStorage.setItem("price", price);
    localStorage.setItem("discount", discount);
    localStorage.setItem("description", description);
    localStorage.setItem("image", image);
  }

  generate() {
    let products = document.getElementById("products");
    if (products) {
      let c = document.createElement("div");
      let p = document.createElement("p");
      p.textContent = this.name;
      p.id = "title";

      let img1 = document.createElement("img");
      img1.setAttribute("src", this.image);
      img1.style.width = "60%";
      img1.style.borderRadius = "5px";
      let pr = document.createElement("p");
      pr.textContent = this.price;
      pr.id = "value";
      let ds = document.createElement("p");
      ds.textContent = "-" + this.discount + "%";
      ds.id = "offer";
      ds.style.position = "relative";
      ds.style.top = "-100px";
      ds.style.left = "50px";

      let b = document.createElement("button");
      b.id = "add";
      b.textContent = "Buy";
      c.style.display = "flex";
      c.style.flexDirection = "column";
      c.style.justifyContent = "space-between"; // равномерное распределение
      c.style.alignItems = "center";
      c.style.width = "200px";
      c.style.background = "#87DD91";
      c.style.border = "2px solid  ";
      c.style.borderColor = "#569C60";
      c.style.borderRadius = "5px";
      c.style.marginLeft = "5px";
      c.style.marginTop = "5px";
      b.addEventListener("click", () => {
        window.location.href = "./buyproduct.html";
        this.isBuying = true;
      });
      c.appendChild(p);
      c.appendChild(img1);
      c.appendChild(pr);
      c.appendChild(ds);
      c.appendChild(b);

      products.appendChild(c);
    }


    this.save(this.name, this.image, this.price, this.discount, this.description);

  }

  getInfo() {
    let product = document.getElementById("card");

    let c = document.createElement("div");

    let p = document.getElementsByTagName("h1")[0];
    p.textContent = this.name;

    let img1 = document.createElement("img");
    img1.setAttribute("src", this.image);

    let pr = document.createElement("p");
    pr.textContent = this.price;

    let ds = document.createElement("p");
    ds.textContent = "-" + this.discount + "%";

    let description = document.createElement("p");
    description.textContent = this.description;

    c.id = "information";
    p.id = "nameInfo";
    img1.id = "imgInfo";
    pr.id = "priceInfo";
    ds.id = "discountInfo";
    description.id = "descriptionInfo";

    c.appendChild(img1);
    c.appendChild(pr);
    c.appendChild(ds);
    c.appendChild(description);

    product.appendChild(c);

  }

}
