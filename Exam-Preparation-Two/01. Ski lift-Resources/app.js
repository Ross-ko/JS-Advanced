window.addEventListener("load", solve);

function solve() {
  const firstNameEl = document.querySelector("#first-name");
  const lastNameEl = document.querySelector("#last-name");
  const peopleCountEl = document.querySelector("#people-count");
  const fromDateEl = document.querySelector("#from-date");
  const daysCountEl = document.querySelector("#days-count");

  const ticketPreviewEl = document.querySelector(".ticket-info-list");
  const confirmTicketEl = document.querySelector(".confirm-ticket");
  const mainEl = document.querySelector("#main");

  const nextBtn = document.querySelector("#next-btn");

  nextBtn.addEventListener("click", ticketInfo);

  function ticketInfo(event) {
    event.preventDefault();

    let firstName = firstNameEl.value;
    let lastName = lastNameEl.value;
    let peopleCount = peopleCountEl.value;
    let fromDate = fromDateEl.value;
    let daysCount = daysCountEl.value;

    if (!firstName || !lastName || !peopleCount || !fromDate || !daysCount) {
      return;
    }

    newTicket(firstName, lastName, peopleCount, fromDate, daysCount);
  }

  function newTicket(firstName, lastName, peopleCount, fromDate, daysCount) {
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
    pOne.textContent = `From date: ${fromDate}`;
    pTwo.textContent = `For ${daysCount} days`;
    pThree.textContent = `For ${peopleCount} people`;
    btnOne.textContent = "Edit";
    btnTwo.textContent = "Continue";

    li.classList.add("ticket-info-list");
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
    peopleCountEl.value = "";
    fromDateEl.value = "";
    daysCountEl.value = "";

    ticketPreviewEl.appendChild(li);

    btnOne.addEventListener("click", () =>
      backToTheRoots(firstName, lastName, peopleCount, fromDate, daysCount)
    );

    btnTwo.addEventListener("click", () =>
      confirmTicket(firstName, lastName, peopleCount, fromDate, daysCount)
    );
  }

  function backToTheRoots(
    firstName,
    lastName,
    peopleCount,
    fromDate,
    daysCount
  ) {
    nextBtn.disabled = false;

    firstNameEl.value = firstName;
    lastNameEl.value = lastName;
    peopleCountEl.value = peopleCount;
    fromDateEl.value = fromDate;
    daysCountEl.value = daysCount;

    ticketPreviewEl.textContent = "";
  }

  function confirmTicket(
    firstName,
    lastName,
    peopleCount,
    fromDate,
    daysCount
  ) {
    ticketPreviewEl.textContent = "";

    const li = document.createElement("li");
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const pOne = document.createElement("p");
    const pTwo = document.createElement("p");
    const pThree = document.createElement("p");
    const btnOne = document.createElement("button");
    const btnTwo = document.createElement("button");

    h3.textContent = `Name: ${firstName} ${lastName}`;
    pOne.textContent = `From date: ${fromDate}`;
    pTwo.textContent = `For ${daysCount} days`;
    pThree.textContent = `For ${peopleCount} people`;
    btnOne.textContent = "Confirm";
    btnTwo.textContent = "Cancel";

    li.classList.add("ticket-content");
    btnOne.classList.add("confirm-btn");
    btnTwo.classList.add("cancel-btn");

    article.appendChild(h3);
    article.appendChild(pOne);
    article.appendChild(pTwo);
    article.appendChild(pThree);
    li.appendChild(article);
    li.appendChild(btnOne);
    li.appendChild(btnTwo);

    confirmTicketEl.appendChild(li);

    btnOne.addEventListener("click", finish);
    btnTwo.addEventListener("click", () => {
      (confirmTicketEl.textContent = ""), (nextBtn.disabled = false);
    });
  }

  function finish(event) {
    mainEl.textContent = "";
    const h1 = document.createElement("h1");
    const btn = document.createElement("button");

    h1.textContent = "Thank you, have a nice day! ";
    btn.textContent = "Back ";

    h1.id = "thank-you";
    btn.id = "back-btn";

    h1.appendChild(btn);
    mainEl.appendChild(h1);

    btn.addEventListener("click", () => {
      location.reload();
    });
  }
}
