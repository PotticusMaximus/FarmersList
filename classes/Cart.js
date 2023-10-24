const Product = require("./Product");

class Cart {
  constructor(products = [], total = 0) {
    this.products = products;
    this.total = total;
  }
  addProduct(product) {
    this.products.push(product);
    this.total += product.price;
  }

  removeProduct(index) {
    this.total -= this.products[index].price;
    this.products.splice(index, 1);
  }

  getTotal() {
    return this.total;
  }

  clear() {
    this.products.length = 0;
    this.total = 0;
  }
}

module.exports = Cart;
