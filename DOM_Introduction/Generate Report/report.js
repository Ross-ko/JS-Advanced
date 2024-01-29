function generateReport() {

    let checkboxEl = Array.from(document.querySelectorAll('input[type=checkbox]'));
    let rows = Array.from(document.querySelectorAll('tbody tr'));

    let result = dataMaping(rows, checkboxEl);

    function dataMaping(rows, checkbox) {
        debugger
        return rows.map(row => report(row, checkbox));
    }

    function report(row, checkbox) {
        let reportObj = {};
        checkbox.forEach((box, indx) => {
            if (box.checked) {
                reportObj[box.name] = row.children[indx].textContent;
                debugger
            }
        });
        return reportObj;
    }

    document.getElementById('output').value = JSON.stringify(result);
}