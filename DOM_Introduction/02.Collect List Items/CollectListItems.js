function extractText() {

    result = [];
    const text = document.getElementById('items');
    const items = Array.from(text.children);

    for (let item of items) {
        result.push(item.textContent);
    }

    const textarea = document.getElementById('result');
    textarea.value = result.join('\n');
}