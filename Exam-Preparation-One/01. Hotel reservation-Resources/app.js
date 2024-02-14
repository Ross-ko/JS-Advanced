window.addEventListener("load", solve);

function solve() {
  const firstNameEl = document.querySelector("#first-name");
  const lastNameEl = document.querySelector("#last-name");
  const dateInEl = document.querySelector("#date-in");
  const dateOutEl = document.querySelector("#date-out");
  const peopleCountEl = document.querySelector("#people-count");

  const reservationInfoEl = document.querySelector(".info-list");
  const confirmReservationEl = document.querySelector(".confirm-list");
  const verificationEl = document.querySelector("#verification");

  const nextBtn = document.querySelector("#next-btn");

  nextBtn.addEventListener("click", addReservation);

  function addReservation(event) {
    event.preventDefault();

    let firstName = firstNameEl.value;
    let lastName = lastNameEl.value;
    let dateIn = dateInEl.value;
    let dateOut = dateOutEl.value;
    let peopleCount = peopleCountEl.value;

    if (!firstName || !lastName || !dateIn || !dateOut || !peopleCount) {
      return;
    }

    reservationCreator(firstName, lastName, dateIn, dateOut, peopleCount);
  }

  function reservationCreator(
    firstName,
    lastName,
    dateIn,
    dateOut,
    peopleCount
  ) {
    nextBtn.disabled = true;

    const li = document.createElement("li");
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const pOne = document.createElement("p");
    const pTwo = document.createElement("p");
    const pThree = document.createElement("p");
    const btnOne = document.createElement("button");
    const btnTwo = document.createElement("button");

    h3.textContent = `Name: ${firstName} ${lastName}`;
    pOne.textContent = `From date: ${dateIn}`;
    pTwo.textContent = `To date: ${dateOut}`;
    pThree.textContent = `For ${peopleCount} people`;
    btnOne.textContent = "Edit";
    btnTwo.textContent = "Continue";

    li.classList.add("reservation-content");
    btnOne.classList.add("edit-btn");
    btnTwo.classList.add("continue-btn");

    article.appendChild(h3);
    article.appendChild(pOne);
    article.appendChild(pTwo);
    article.appendChild(pThree);
    li.appendChild(article);
    li.appendChild(btnOne);
    li.appendChild(btnTwo);

    firstNameEl.value = "";
    lastNameEl.value = "";
    dateInEl.value = "";
    dateOutEl.value = "";
    peopleCountEl.value = "";

    reservationInfoEl.appendChild(li);

    btnOne.addEventListener("click", () =>
      backToTheRoots(firstName, lastName, dateIn, dateOut, peopleCount)
    );
    btnTwo.addEventListener("click", () =>
      confirmReservation(firstName, lastName, dateIn, dateOut, peopleCount)
    );
  }

  function backToTheRoots(firstName, lastName, dateIn, dateOut, peopleCount) {
    nextBtn.disabled = false;

    firstNameEl.value = firstName;
    lastNameEl.value = lastName;
    dateInEl.value = dateIn;
    dateOutEl.value = dateOut;
    peopleCountEl.value = peopleCount;

    reservationInfoEl.textContent = "";
  }

  function confirmReservation(
    firstName,
    lastName,
    dateIn,
    dateOut,
    peopleCount
  ) {
    reservationInfoEl.textContent = "";

    const li = document.createElement("li");
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const pOne = document.createElement("p");
    const pTwo = document.createElement("p");
    const pThree = document.createElement("p");
    const btnOne = document.createElement("button");
    const btnTwo = document.createElement("button");

    h3.textContent = `Name: ${firstName} ${lastName}`;
    pOne.textContent = `From date: ${dateIn}`;
    pTwo.textContent = `To date: ${dateOut}`;
    pThree.textContent = `For ${peopleCount} people`;
    btnOne.textContent = "Confirm";
    btnTwo.textContent = "Cancel";

    li.classList.add("reservation-content");
    btnOne.classList.add("confirm-btn");
    btnTwo.classList.add("cancel-btn");

    article.appendChild(h3);
    article.appendChild(pOne);
    article.appendChild(pTwo);
    article.appendChild(pThree);
    li.appendChild(article);
    li.appendChild(btnOne);
    li.appendChild(btnTwo);

    confirmReservationEl.appendChild(li);

    btnOne.addEventListener("click", finish.bind(null, true));
    btnTwo.addEventListener("click", finish.bind(null, false));
  }

  function finish(confirmed) {
    let className = confirmed
      ? "reservation-confirmed"
      : "reservation-cancelled";
    let text = confirmed ? "Confirmed." : "Cancelled.";

    verificationEl.className = className;
    verificationEl.textContent = text;

    confirmReservationEl.textContent = "";
    nextBtn.disabled = false;
  }
}
