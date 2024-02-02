function breakfastRobot() {
    let warehouse = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let meals = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },

        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },

        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },

        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },

        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    return function (data) {
        let [command, stock, qty] = data.split(' ');

        switch (command) {
            case 'restock':
                return restock(stock, qty);
            case 'prepare':
                return prepare(stock, qty);
            case 'report':
                return report();
        }
    }

    function restock(stock, qty) {
        warehouse[stock] += Number(qty);
        return 'Success';
    }

    function prepare(meal, qty) {
        let preparedMeals = {};

        for (let [stock, value] of Object.entries(meals[meal])){
            let neededStock = value * qty;
            if (warehouse[stock] < neededStock) {
                return `Error: not enough ${stock} in stock`
            } else {
                preparedMeals[stock] = neededStock;
            }
        }

        for (let [stock, value] of Object.entries(preparedMeals)) {
            warehouse[stock] -= value;
        }

        return 'Success';
    }

    function report() {
        return `protein=${warehouse.protein} carbohydrate=${warehouse.carbohydrate} fat=${warehouse.fat} flavour=${warehouse.flavour}`
    }
}

let manager = breakfastRobot();
console.log(manager('prepare turkey 1')); 
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));