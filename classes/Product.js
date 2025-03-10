class Product {
  constructor(name, price, description, inStock = true) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.inStock = inStock;
  }
  display() {
    return `Name: ${this.name}, Price: $${this.price}, Description: ${this.description}`;
  }
}

module.exports = Product;
