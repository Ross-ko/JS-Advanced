function townsToJSON(data) {

    let townsInfo = [];

    for (let i = 1; i < data.length; i++) {

    let [town, latitude, longitude] = data[i].split('|').map(space => space.trim()).filter(space => !!space);

    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);
    
    townsInfo.push({ Town: town, Latitude: Number(latitude), Longitude: Number(longitude) });
    }

    console.log(JSON.stringify(townsInfo));
}

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
])