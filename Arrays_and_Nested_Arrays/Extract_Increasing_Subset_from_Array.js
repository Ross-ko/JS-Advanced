function extractIncreasingSubsetFromArray(data) {

    let firstNum = Number.NEGATIVE_INFINITY;
    let result = [];

    for (let i = 0; i < data.length; i++) {
        if (firstNum <= data[i]) {
            firstNum = data[i];
            result.push(firstNum);
        }
    }

    return result;
}

console.log(extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));