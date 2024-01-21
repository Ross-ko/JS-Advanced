function changeColor() {
    const input = document.querySelector('[name="color"]');
    const color = input.value;

    const h1 = document.getElementById('title');
    h1.style.color = color;
};