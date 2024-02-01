function areaAndVolume(area, volume, input) {
  let objects = JSON.parse(input);

  function calculate(obj) {
    let areaObj = area.call(obj);
    let volumeObj = volume.call(obj);

    return { area: areaObj, volume: volumeObj };
  }

  return objects.map(calculate);
  //   console.log(objects.map(calculate)); /* ---> to see the result */
}

function area() {
  return Math.abs(this.x * this.y);
}

function volume() {
  return Math.abs(this.x * this.y * this.z);
}

areaAndVolume(
  area,
  volume,
  `[
    {"x":"10","y":"-22","z":"10"},   
    {"x":"47","y":"7","z":"-5"}, 
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}  
    ]`
);
