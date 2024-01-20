function calorieObject(data) {

    const food = {};

    for (let i = 0; i < data.length; i+=2) {
        
        food[data[i]] = Number(data[i+1]);
    }

    console.log(food);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])