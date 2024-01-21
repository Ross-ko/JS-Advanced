function sumTable() {

    let result = 0;
    let table = document.querySelectorAll('table tr');

    for (let i = 1; i < table.length - 1; i++) {

        let cols = table[i].children;
        let value = cols[cols.length - 1].textContent;

        result += Number(value);
    }
    
    document.getElementById('sum').textContent = result;
}