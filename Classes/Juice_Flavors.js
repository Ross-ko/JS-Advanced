function juiceFlavors(data) {
  let juices = {};
  let bottledJuices = {};

  for (let juiceData of data) {
    let [juice, quantity] = juiceData.split(" => ");
    quantity = Number(quantity);

    if (!juices.hasOwnProperty(juice)) {
      juices[juice] = quantity;
    } else {
      juices[juice] += quantity;
    }

    if (juices[juice] >= 1000) {
      let bottles = Math.floor(juices[juice] / 1000);

      if (!bottledJuices.hasOwnProperty(juice)) {
        bottledJuices[juice] = bottles;
        juices[juice] -= 1000 * bottles;
      } else {
        bottledJuices[juice] += bottles;
        juices[juice] -= 1000 * bottles;
      }
    }
  }

  for (let juices in bottledJuices) {
    console.log(`${juices} => ${bottledJuices[juices]}`);
  }
}

juiceFlavors([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
