class FashionRetailInventory {
  storehouse;
  location;
  productStock;

  constructor(storehouse, location) {
    this.storehouse = storehouse;
    this.location = location;
    this.productStock = [];
  }

  addProduct(productName, size, quantity, price) {
    let prodInfo = this.productStock.find(
      (prod) => prod.productName == productName
    );
    if (!prodInfo || prodInfo.size != size) {
      this.productStock.push({ productName, size, quantity, price });
      return `The product ${productName}, size ${size} was successfully added to the inventory`;
    } else if (prodInfo.size == size) {
      prodInfo.quantity += quantity;
      return `You added ${quantity} more pieces of product ${productName} size ${size}`;
    } else {
      this.productStock.push({ productName, size, quantity, price });
      return `The product ${productName}, size ${size} was successfully added to the inventory`;
    }
  }

  sendProduct(productName, size) {
    let prodInfo = this.productStock.find(
      (prod) => prod.productName == productName
    );
    if (!prodInfo || prodInfo.size != size) {
      throw new Error(
        `The product ${productName}, size ${size} is not in the inventory`
      );
    } else {
      this.productStock = this.productStock.filter(
        (p) => p.productName != productName
      );
      return `The product ${productName}, size ${size} was successfully removed from the inventory`;
    }
  }

  findProductsBySize(size) {
    let prodInfo = this.productStock.find((prod) => prod.size == size);

    if (!prodInfo) {
      throw new Error(`There are no products available in that size`);
    } else {
      let prodInfo = this.productStock.filter((prod) => prod.size == size);

      let result = [];

      prodInfo.forEach((prod) => {
        result.push(`${prod.productName}-${prod.quantity} pieces`);
      });
      return result.join(", ");
    }
  }

  listProducts() {
    if (this.productStock.length == 0) {
      return `${this.storehouse} storehouse is empty`;
    } else {
      let result = [
        `${this.storehouse} storehouse in ${this.location} available products:`,
      ];
      this.productStock
        .sort((a, b) => a.productName.localeCompare(b.productName))
        .forEach((prod) => {
          result.push(
            `${prod.productName}/Size:${prod.size}/Quantity:${prod.quantity}/Price:${prod.price}$`
          );
        });

      return result.join("\n");
    }
  }
}

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());
