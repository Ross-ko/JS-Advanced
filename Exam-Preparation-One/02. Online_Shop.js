class OnlineShop {
  warehouseSpace;
  products = [];
  sales = [];

  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
  }

  loadingStore(product, quantity, spaceRequired) {
    if (this.warehouseSpace < spaceRequired) {
      throw new Error("Not enough space in the warehouse.");
    } else {
      this.products.push({ product, quantity });
      this.warehouseSpace -= spaceRequired;
      return `The ${product} has been successfully delivered in the warehouse.`;
    }
  }

  quantityCheck(product, minimalQuantity) {
    let data = this.products.find((prod) => prod.product == product);

    if (!data) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    if (minimalQuantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }
    if (minimalQuantity <= data.quantity) {
      return `You have enough from product ${product}.`;
    } else {
      let difference = minimalQuantity - data.quantity;
      data.quantity = minimalQuantity;
      return `You added ${difference} more from the ${product} products.`;
    }
  }

  sellProduct(product) {
    let data = this.products.find((prod) => prod.product == product);

    if (!data) {
      throw new Error(`There is no ${product} in the warehouse.`);
    } else {
      data.quantity -= 1;
      this.sales.push({ product, quantity: 1 });
      return `The ${product} has been successfully sold.`;
    }
  }

  revision() {
    if (this.sales.length == 0) {
      throw new Error("There are no sales today!");
    } else {
      let result = [
        `You sold ${this.sales.length} products today!`,
        "Products in the warehouse:",
      ];
      for (let { product, quantity } of this.products) {
        result.push(`${product}-${quantity} more left`);
      }
      return result.join("\n");
    }
  }
}

const myOnlineShop = new OnlineShop(500);

console.log(myOnlineShop.loadingStore("headphones", 10, 200));
console.log(myOnlineShop.loadingStore("laptop", 5, 200));
console.log(myOnlineShop.quantityCheck("headphones", 10));
console.log(myOnlineShop.quantityCheck("laptop", 10));
console.log(myOnlineShop.sellProduct("headphones"));
console.log(myOnlineShop.sellProduct("laptop"));
console.log(myOnlineShop.revision());