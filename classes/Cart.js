const Product = require("index.js");

class Cart {
  constructor(products, total = 0) {
    this.products = [];
    this.total = total;
  }
  addProduct(product) {
    this.product = Product;
    this.products.push(product);
    total++;
  }
}
