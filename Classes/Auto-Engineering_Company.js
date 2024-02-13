function autoEngineeringCompany(data) {
  let producedCars = {};

  for (let carData of data) {
    let [brand, model, qty] = carData.split(" | ");
    qty = Number(qty);

    if (!(brand in producedCars)) {
      producedCars[brand] = {};
    }
    if (!(model in producedCars[brand])) {
      producedCars[brand][model] = qty;
    } else {
      producedCars[brand][model] += qty;
    }
  }

  for (let brand in producedCars) {
    console.log(brand);
    for (let model of Object.entries(producedCars[brand])) {
      console.log(`###${model[0]} -> ${model[1]}`);
    }
  }
}

autoEngineeringCompany([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
