function toggle() {

    let button = document.getElementsByClassName("button");

    if (button[0].textContent == 'More') {
        document.getElementById("extra").style.display = "block";
        button[0].textContent = 'Less';
    } else if (button[0].textContent == 'Less') {
        document.getElementById("extra").style.display = "none";
        button[0].textContent = 'More';
    }
}