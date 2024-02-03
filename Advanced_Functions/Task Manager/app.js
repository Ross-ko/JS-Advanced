function solve() {
  const taskEl = document.querySelector("input[id=task]");
  const descriptionEl = document.querySelector("textarea[id=description]");
  const dueDateEl = document.querySelector("input[id=date]");
  const addBtnEl = document.querySelector("button[id=add]");

  const sections = document.querySelectorAll("section");
  const openSection = sections[1].querySelectorAll("div")[1];
  const inProgressSection = sections[2].querySelectorAll("div")[1];
  const completeSection = sections[3].querySelectorAll("div")[1];

  addBtnEl.addEventListener("click", addTask);

  function addTask(event) {
    event.preventDefault();
    let task = taskEl.value;
    let description = descriptionEl.value;
    let dueDate = dueDateEl.value;

    if (!task || !description || !dueDate) {
      return;
    }
    taskCreator(task, description, dueDate);
  }

  function taskCreator(task, description, dueDate) {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const pOne = document.createElement("p");
    const pTwo = document.createElement("p");
    const div = document.createElement("div");
    const btnOne = document.createElement("button");
    const btnTwo = document.createElement("button");

    h3.textContent = task;
    pOne.textContent = `Description: ${description}`;
    pTwo.textContent = `Due Date: ${dueDate}`;
    div.className = "flex";
    btnOne.textContent = "Start";
    btnOne.className = "green";
    btnTwo.textContent = "Delete";
    btnTwo.className = "red";

    article.appendChild(h3);
    article.appendChild(pOne);
    article.appendChild(pTwo);
    div.appendChild(btnOne);
    div.appendChild(btnTwo);
    article.appendChild(div);

    openSection.appendChild(article);

    btnOne.addEventListener("click", taskMover);
    btnTwo.addEventListener("click", () => {
      article.remove();
    });

    function taskMover(event) {
      const cloneArticle = event.currentTarget.parentElement.parentElement;
      event.currentTarget.parentElement.parentElement.remove();

      let btnOne = cloneArticle.querySelectorAll("button")[0];
      let btnTwo = cloneArticle.querySelectorAll("button")[1];

      btnOne.textContent = "Delete";
      btnOne.className = "red";
      btnTwo.textContent = "Finish";
      btnTwo.className = "orange";

      inProgressSection.appendChild(cloneArticle);

      btnTwo.addEventListener("click", finish);
      btnOne.addEventListener("click", () => {
        article.remove();
      });
    }

    function finish(event) {
      const cloneArticle = event.currentTarget.parentElement.parentElement;
      event.currentTarget.parentElement.parentElement.remove();

      let buttons = cloneArticle.querySelector("div");
      buttons.remove();

      completeSection.appendChild(cloneArticle);
    }
  }
}
