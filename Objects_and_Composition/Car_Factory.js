function carFactory(carOrder) {

    let carTemplate = {
        model: carOrder.model,
        engine: {},
        carriage: { type: carOrder.carriage, color: carOrder.color },
        wheels: []
    };

    if (carOrder.power <= 119) {

        carTemplate.engine.power = 90;
        carTemplate.engine.volume = 1800;
    } else if (carOrder.power <= 199) {

        carTemplate.engine.power = 120
        carTemplate.engine.volume = 2400;
    }else if (carOrder.power >= 200) {
        
        carTemplate.engine.power = 200;
        carTemplate.engine.volume = 3500;
    }

    if (carOrder.wheelsize % 2 == 0) {
        carTemplate.wheels = Array(4).fill(carOrder.wheelsize - 1);
    } else {
        carTemplate.wheels = Array(4).fill(carOrder.wheelsize);
    }

    return carTemplate;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});