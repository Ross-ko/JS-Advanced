function addAndRemoveElements(data) {

    let result = [];
    let step = 1;

    for (const command of data) {
        if (command == "add") {
            result.push(step);
            step++;
        } else if (command == "remove") {
             result.pop();
             step++;
           
        }
    }
    if (result.length < 1) {
        return "Empty";
    } else {
       return result.join("\n");
    }
}

console.log(addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']));