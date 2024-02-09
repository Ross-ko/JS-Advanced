function notify(message) {
  const notification = document.querySelector("div[id=notification]");

  notification.textContent = message;
  notification.style.display = "block";

  notification.addEventListener("click", () => {
    notification.style.display = "none";
  });
}
