window.addEventListener("load", solve);

function solve() {
  const snowManEl = document.querySelector("#snowman-name");
  const heightEl = document.querySelector("#snowman-height");
  const locationEl = document.querySelector("#location");
  const creatorEl = document.querySelector("#creator-name");
  const specialAttributeEl = document.querySelector("#special-attribute");

  const snowmanPreviewSection = document.querySelector(".snowman-preview");
  const yourSnowmanSection = document.querySelector(".snow-list");
  const mainEl = document.querySelector('#hero');
  const bodyEl = document.querySelector('.body');

  const addBtn = document.querySelector(".add-btn");

  addBtn.addEventListener("click", dataCollector);

  function dataCollector(event) {
    event.preventDefault();

    let snowMan = snowManEl.value;
    let height = heightEl.value;
    let location = locationEl.value;
    let creator = creatorEl.value;
    let specialAttribute = specialAttributeEl.value;

    if (!snowMan || !height || !location || !creator || !specialAttribute) {
      return;
    }

    newSnowman(snowMan, height, location, creator, specialAttribute);
  }

  function newSnowman(snowMan, height, location, creator, specialAttribute) {
    addBtn.disabled = true;

    const li = document.createElement("li");
    const article = document.createElement("article");
    const pOne = document.createElement("p");
    const pTwo = document.createElement("p");
    const pThree = document.createElement("p");
    const pFour = document.createElement("p");
    const pFive = document.createElement("p");
    const div = document.createElement("div");
    const btnOne = document.createElement("button");
    const btnTwo = document.createElement("button");

    pOne.textContent = `Name: ${snowMan}`;
    pTwo.textContent = `Height: ${height}`;
    pThree.textContent = `Location: ${location}`;
    pFour.textContent = `Creator: ${creator}`;
    pFive.textContent = `Attribute: ${specialAttribute}`;
    btnOne.textContent = `Edit`;
    btnTwo.textContent = `Next`;

    li.classList.add("snowman-info");
    div.classList.add("btn-container");
    btnOne.classList.add("edit-btn");
    btnTwo.classList.add("next-btn");

    article.appendChild(pOne);
    article.appendChild(pTwo);
    article.appendChild(pThree);
    article.appendChild(pFour);
    article.appendChild(pFive);
    div.appendChild(btnOne);
    div.appendChild(btnTwo);
    li.appendChild(article);
    li.appendChild(div);

    snowManEl.value = "";
    heightEl.value = "";
    locationEl.value = "";
    creatorEl.value = "";
    specialAttributeEl.value = "";

    snowmanPreviewSection.appendChild(li);

    btnOne.addEventListener("click", () =>
      backToTheRoots(snowMan, height, location, creator, specialAttribute)
    );
    btnTwo.addEventListener("click", () =>
      yourSnowman(snowMan, height, location, creator, specialAttribute)
    );
  }

  function backToTheRoots(
    snowMan,
    height,
    location,
    creator,
    specialAttribute
  ) {
    addBtn.disabled = false;

    snowManEl.value = snowMan;
    heightEl.value = height;
    locationEl.value = location;
    creatorEl.value = creator;
    specialAttributeEl.value = specialAttribute;

    snowmanPreviewSection.textContent = "";
  }

  function yourSnowman(snowMan, height, location, creator, specialAttribute) {
    snowmanPreviewSection.textContent = "";

    const li = document.createElement("li");
    const article = document.createElement("article");
    const pOne = document.createElement("p");
    const pTwo = document.createElement("p");
    const pThree = document.createElement("p");
    const pFour = document.createElement("p");
    const pFive = document.createElement("p");
    const btn = document.createElement("button");

    pOne.textContent = `Name: ${snowMan}`;
    pTwo.textContent = `Height: ${height}`;
    pThree.textContent = `Location: ${location}`;
    pFour.textContent = `Creator: ${creator}`;
    pFive.textContent = `Attribute: ${specialAttribute}`;
    btn.textContent = `Send`;

    li.classList.add("snowman-content");
    btn.classList.add("send-btn");

    article.appendChild(pOne);
    article.appendChild(pTwo);
    article.appendChild(pThree);
    article.appendChild(pFour);
    article.appendChild(pFive);
    article.appendChild(btn);
    li.appendChild(article);

    YourSnowmanSection.appendChild(li);

    btn.addEventListener('click', finish)
  }

  function finish(event){
    mainEl.textContent = "";

    const snowManImg = document.querySelector('#back-img');
    snowManImg.removeAttribute("hidden")

    const btn = document.createElement("button");
    btn.textContent = "Back ";
    btn.classList.add('back-btn');

    bodyEl.appendChild(btn);

    btn.addEventListener("click", () => {
      location.reload();
    });
  }
}
