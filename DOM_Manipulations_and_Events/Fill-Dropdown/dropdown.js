function addItem() {
  const newItemEl = document.querySelector("input[id=newItemText]");
  const itemValueEl = document.querySelector("input[id=newItemValue]");
  const menu = document.querySelector("select[id=menu]");

  let newItem = newItemEl.value;
  let itemValue = itemValueEl.value;

  let option = document.createElement("option");
  option.textContent = newItem;
  option.value = itemValue;

  menu.appendChild(option);

  newItemEl.value = "";
  itemValueEl.value = "";
}
