function heroicInventory(data) {

    const heroes = [];

    for (let i = 0; i < data.length; i++) {
        let heroInfo = data[i].split(' / ');
        heroes.push({ name: heroInfo[0], level: Number(heroInfo[1]), items: heroInfo[2] ? heroInfo[2].split(', ') : [] });
    }
    
    console.log( JSON.stringify(heroes));
}

heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);