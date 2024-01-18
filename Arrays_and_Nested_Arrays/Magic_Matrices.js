function magicMatrices(matrix) {

    for (let i = 0; i < matrix.length - 1; i++) {

        let rowOne = matrix[i].reduce((acc, num) => acc + num);
        let rowTwo = matrix[i + 1].reduce((acc, num) => acc + num);
        let columnOne = matrix.reduce((acc, num) => acc + num[i], 0);
        let columnTwo = matrix.reduce((acc, num) => acc + num[i + 1], 0);
        
        if(rowOne != rowTwo || columnOne != columnTwo) {
            return false;
        }
    }
    return true;
    
}

console.log(magicMatrices([[4, 5, 6],
                           [6, 5, 4],
                           [5, 5, 5]]));