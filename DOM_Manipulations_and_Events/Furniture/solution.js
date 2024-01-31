function solve() {
  const inputAreaEl = document.querySelectorAll("textarea")[0];
  const resultAreaEl = document.querySelectorAll("textarea")[1];
  const generateBtn = document.querySelectorAll("button")[0];
  const buyBtn = document.querySelectorAll("button")[1];
  const table = document.querySelector("tbody");

  generateBtn.addEventListener("click", generate);

  function generate() {
    let inputArea = JSON.parse(inputAreaEl.value);
    for (let item of inputArea) {
      let row = document.createElement("tr");

      let tDataImg = document.createElement("td");
      let img = document.createElement("img");
      img.src = item.img;
      tDataImg.appendChild(img);
      row.appendChild(tDataImg);

      let tDataName = document.createElement("td");
      let name = document.createElement("p");
      name.textContent = item.name;
      tDataName.appendChild(name);
      row.appendChild(tDataName);

      let tDataPrice = document.createElement("td");
      let price = document.createElement("p");
      price.textContent = item.price;
      tDataPrice.appendChild(price);
      row.appendChild(tDataPrice);

      let tDataDecFactor = document.createElement("td");
      let decFactor = document.createElement("p");
      decFactor.textContent = item.decFactor;
      tDataDecFactor.appendChild(decFactor);
      row.appendChild(tDataDecFactor);

      let tDataCheckbox = document.createElement("td");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      tDataCheckbox.appendChild(checkbox);
      row.appendChild(tDataCheckbox);

      table.appendChild(row);
    }
  }

  buyBtn.addEventListener("click", buy);

  function buy() {
    let purchases = Array.from(
      document.querySelectorAll("input[type=checkbox]:checked")
    ).map((p) => p.parentElement.parentElement);
    let itemName = [];
    let itemPrice = 0;
    let decFacSum = 0;
    
    for (let item of purchases) {
      let info = item.children;
      itemName.push(info[1].children[0].textContent);
      itemPrice += Number(info[2].children[0].textContent);
      decFacSum += Number(info[3].children[0].textContent);
    }
    resultAreaEl.value += `Bought furniture: ${itemName.join(", ")}\n`;
    resultAreaEl.value += `Total price: ${itemPrice.toFixed(2)}\n`;
    resultAreaEl.value += `Average decoration factor: ${
      decFacSum / purchases.length
    }`;
  }
}
