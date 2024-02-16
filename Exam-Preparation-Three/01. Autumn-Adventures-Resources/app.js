window.addEventListener("load", solve);

function solve() {
  const timeEl = document.querySelector("#time");
  const dateEl = document.querySelector("#date");
  const placeEl = document.querySelector("#place");
  const eventEl = document.querySelector("#event-name");
  const emailEl = document.querySelector("#email");

  const upcomingSection = document.querySelector("#upcoming-list");
  const lastCheckSection = document.querySelector("#check-list");
  const finishedSection = document.querySelector("#finished-list");

  const addBtn = document.querySelector("#add-btn");
  const clearBtn = document.querySelector("#clear");

  addBtn.addEventListener("click", dataCollector);

  function dataCollector(e) {
    let time = timeEl.value;
    let date = dateEl.value;
    let place = placeEl.value;
    let event = eventEl.value;
    let email = emailEl.value;

    if (!time || !date || !place || !event || !email) {
      return;
    }

    newEvent(time, date, place, event, email);
  }

  function newEvent(time, date, place, event, email) {
    addBtn.disabled = true;

    const li = document.createElement("li");
    const article = document.createElement("article");
    const pOne = document.createElement("p");
    const pTwo = document.createElement("p");
    const pThree = document.createElement("p");
    const pFour = document.createElement("p");
    const btnOne = document.createElement("button");
    const btnTwo = document.createElement("button");

    pOne.textContent = `Begins: ${date} at: ${time}`;
    pTwo.textContent = `In: ${place}`;
    pThree.textContent = `Event: ${event}`;
    pFour.textContent = `Contact: ${email}`;
    btnOne.textContent = "Edit";
    btnTwo.textContent = "Continue";

    li.classList.add("event-content");
    btnOne.classList.add("edit-btn");
    btnTwo.classList.add("continue-btn");

    article.appendChild(pOne);
    article.appendChild(pTwo);
    article.appendChild(pThree);
    article.appendChild(pFour);
    li.appendChild(article);
    li.appendChild(btnOne);
    li.appendChild(btnTwo);

    timeEl.value = "";
    dateEl.value = "";
    placeEl.value = "";
    eventEl.value = "";
    emailEl.value = "";

    lastCheckSection.appendChild(li);

    btnOne.addEventListener("click", () =>
      backToTheRoots(time, date, place, event, email)
    );

    btnTwo.addEventListener("click", () =>
      upcomingEvent(time, date, place, event, email)
    );
  }

  function backToTheRoots(time, date, place, event, email) {
    addBtn.disabled = false;

    timeEl.value = time;
    dateEl.value = date;
    placeEl.value = place;
    eventEl.value = event;
    emailEl.value = email;

    lastCheckSection.textContent = "";
  }

  function upcomingEvent(time, date, place, event, email) {
    const li = document.createElement("li");
    const article = document.createElement("article");
    const pOne = document.createElement("p");
    const pTwo = document.createElement("p");
    const pThree = document.createElement("p");
    const pFour = document.createElement("p");
    const btnOne = document.createElement("button");

    pOne.textContent = `Begins: ${date} at: ${time}`;
    pTwo.textContent = `In: ${place}`;
    pThree.textContent = `Event: ${event}`;
    pFour.textContent = `Contact: ${email}`;
    btnOne.textContent = "Move to Finished";

    li.classList.add("event-content");
    btnOne.classList.add("finished-btn");

    article.appendChild(pOne);
    article.appendChild(pTwo);
    article.appendChild(pThree);
    article.appendChild(pFour);
    li.appendChild(article);
    li.appendChild(btnOne);

    upcomingSection.appendChild(li);

    lastCheckSection.textContent = "";
    addBtn.disabled = false;

    btnOne.addEventListener("click", () =>
      finished(time, date, place, event, email)
    );
  }

  function finished(time, date, place, event, email) {
    const li = document.createElement("li");
    const article = document.createElement("article");
    const pOne = document.createElement("p");
    const pTwo = document.createElement("p");
    const pThree = document.createElement("p");
    const pFour = document.createElement("p");

    pOne.textContent = `Begins: ${date} at: ${time}`;
    pTwo.textContent = `In: ${place}`;
    pThree.textContent = `Event: ${event}`;
    pFour.textContent = `Contact: ${email}`;

    li.classList.add("event-content");

    article.appendChild(pOne);
    article.appendChild(pTwo);
    article.appendChild(pThree);
    article.appendChild(pFour);
    li.appendChild(article);

    finishedSection.appendChild(li);
    upcomingSection.textContent = "";

    clearBtn.addEventListener("click", () => {
      finishedSection.textContent = "";
    });
  }
}
