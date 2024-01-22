function storeCatalogue(data) {

    let catalog = {};
    let sortedCatalogue = data.sort((a, b) => b.localeCompare(a)).reverse();

    for (const productInfo of sortedCatalogue) {
        let [product, price] = productInfo.split(' : ');
        catalog[product] = Number(price);
    }

    let letter = '';

    for (const [product, price] of Object.entries(catalog)) {
        let curLetter = product[0];

        if (letter != curLetter) {
            console.log(curLetter);
            console.log(`  ${product}: ${price}`);
            letter = curLetter;
        } else {
            console.log(`  ${product}: ${price}`);
        }
    }
}

storeCatalogue([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);