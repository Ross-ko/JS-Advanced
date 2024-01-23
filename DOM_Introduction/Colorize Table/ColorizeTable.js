function colorize() {

    const rows = Array.from(document.getElementsByTagName('tr'));
    
    for (let i = 1; i < rows.length; i+=2) {
        rows[i].style.backgroundColor = 'teal';
    }
}

/*alternative solution*/

function colorizeV2() {

    const rows = document.querySelectorAll('tr:nth-child(even)');

    for (let row of rows) {
        row.style.backgroundColor = 'teal';
    }
}