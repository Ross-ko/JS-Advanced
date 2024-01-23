function rectangle(width, height, color) {

    let rectObj = {
        width,
        height,
        color: color[0].toUpperCase() + color.substring(1),
        calcArea: () => width * height
    }
    return rectObj;
}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());