function rotateArray(arr, rotations) {

    for (let i = 0; i < rotations; i++) {
        let x = arr.pop();
        arr.unshift(x);
    }
    
    return arr.join(' ');
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);