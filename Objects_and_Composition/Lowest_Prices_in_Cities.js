function lowestPricesInCities(data) {

    const bestPrices = {};

    for (let i = 0; i < data.length; i++) {

        let [town, product, price] = data[i].split(' | ');

        if (!(product in bestPrices)) {
            bestPrices[product] = { town, price: Number(price) };
        } else if (bestPrices[product].price > price) {
            bestPrices[product].town = town;
            bestPrices[product].price = price;
        }
    }
    
    for (let product in bestPrices) {
        console.log(`${product} -> ${bestPrices[product].price} (${bestPrices[product].town})`);
    }
}

    lowestPricesInCities([
        'Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10'
    ]);