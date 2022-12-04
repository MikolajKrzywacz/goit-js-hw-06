function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesWrapper = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

let inputValue = 0;

let decfaultSize = 30;
btnCreate.addEventListener("click", createBoxes);
// btnCreate.addEventListener('click', createBoxes(inputValue));
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  //nie wiedziałem jak zrobić funkcję która przyjmie parametr z pola input
  let inputValue = Number(input.value);
  for (let i = 0; i < inputValue; i++) {
    const newDiv = document.createElement("div");
    let hexColor = getRandomHexColor();
    newDiv.style.width = `${30 + 10 * i}px`;
    newDiv.style.height = `${30 + 10 * i}px`;
    newDiv.style.border = `1px solid ${hexColor}`;
    newDiv.style.backgroundColor = hexColor;
    boxesWrapper.append(newDiv);
  }
}

function destroyBoxes() {
  while (boxesWrapper.firstChild) {
    boxesWrapper.removeChild(boxesWrapper.firstChild);
  }
}