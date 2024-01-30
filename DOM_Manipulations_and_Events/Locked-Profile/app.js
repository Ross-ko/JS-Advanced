function lockedProfile() {
  const buttons = document.querySelectorAll("button");

  for (let btn of buttons) {
    btn.addEventListener("click", showMe);
  }

  function showMe(event) {
    let lock = event.currentTarget.parentNode.children[2];
    let unlock = event.currentTarget.parentNode.children[4];
    let hiddenInfo = event.currentTarget.parentNode.children[9];
    let btnTxt = event.currentTarget.textContent;

    if (unlock.checked && btnTxt == "Show more") {
      hiddenInfo.style.display = "block";
      event.currentTarget.textContent = "Hide it";
    }

    if (unlock.checked && btnTxt == "Hide it") {
      hiddenInfo.style.display = "none";
      event.currentTarget.textContent = "Show more";
    }
  }
}
