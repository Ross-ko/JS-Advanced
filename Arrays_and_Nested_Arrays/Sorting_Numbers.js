function sortingNumbers(numbers) {

    let result = [];
    numbers.sort((a, b) => a - b);
    
    for (let i = 0; i <= numbers.length; i++) {
        let littleNum = numbers.shift();
        result.push(littleNum);
        let bigNum = numbers.pop();
        result.push(bigNum);
        i=0
    }

     return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));