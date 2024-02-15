class WineSelection {
  space = 0;
  wines = [];
  bill = 0;

  constructor(space) {
    this.space = space;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.space < 1) {
      throw new Error("Not enough space in the cellar.");
    } else {
      this.space -= 1;
      this.wines.push({ wineName, wineType, price, paid: false });
      return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }
  }

  payWineBottle(wineName, price) {
    let wine = this.wines.find((w) => w.wineName == wineName);

    if (!wine) {
      throw new Error(`${wineName} is not in the cellar.`);
    }
    if (wine.paid == true) {
      throw new Error(`${wineName} has already been paid.`);
    } else {
      wine.paid = true;
      this.bill += price;
      return `You bought a ${wineName} for a ${price}$.`;
    }
  }

  openBottle(wineName) {
    let wine = this.wines.find((w) => w.wineName == wineName);

    if (!wine) {
      throw new Error("The wine, you're looking for, is not found.");
    }
    if (wine.paid == false) {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    } else {
      this.wines = this.wines.filter((w) => w.wineName !== wineName);
      return `You drank a bottle of ${wineName}.`;
    }
  }

  cellarRevision(wineType) {
    if (wineType) {
      let curWine = this.wines.find((w) => w.wineType == wineType);

      if (!curWine) {
        throw new Error(`There is no ${wineType} in the cellar.`);
      }

      return `${curWine.wineName} > ${wineType} - ${
        curWine.paid ? "Has Paid" : "Not Paid"
      }.`;
    }

    let info = `You have space for ${this.space} bottles more.\n`;
    info += `You paid ${this.bill}$ for the wine.\n`;

    this.wines
      .sort((a, b) => a.wineName.localeCompare(b.wineName))
      .forEach((w) => {
        info += `${w.wineName} > ${w.wineType} - ${
          w.paid ? "Has Paid" : "Not Paid"
        }.\n`;
      });

    return info.trim();
  }
}

const selection = new WineSelection(5);

selection.reserveABottle("Bodegas Godelia Mencía", "Rose", 144);

selection.payWineBottle("Bodegas Godelia Mencía", 144);
selection.reserveABottle("Sauvignon Blanc Marlborough", "White", 50);
selection.reserveABottle("Cabernet Sauvignon Napa Valley", "Red", 120);
console.log(selection.cellarRevision());
