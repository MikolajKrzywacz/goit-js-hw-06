function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesWrapper = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnCreateRemember = document.querySelector(
  "button[data-create-remember]"
);
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
let lastPosition = 0;
let inputValue = 0;

let defaultSize = 30;
btnCreate.addEventListener("click", createBoxes);
btnCreateRemember.addEventListener("click", createBoxesRemember);
// btnCreate.addEventListener('click', createBoxes(inputValue));
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  //nie wiem dlaczego redeklarowałem tutaj zmienna xD Głupi błąd
  inputValue = Number(input.value);
  for (let i = 0; i < inputValue; i++) {
    const newDiv = document.createElement("div");
    let hexColor = getRandomHexColor();
    newDiv.style.width = `${defaultSize + 10 * i}px`;
    newDiv.style.height = `${defaultSize + 10 * i}px`;
    newDiv.style.border = `1px solid ${hexColor}`;
    newDiv.style.backgroundColor = hexColor;
    boxesWrapper.append(newDiv);
  }
}

function createBoxesRemember() {
  inputValue = Number(input.value);
  console.log(lastPosition + inputValue);
  for (let i = lastPosition; i < lastPosition + inputValue; i++) {
    const newDiv = document.createElement("div");
    let hexColor = getRandomHexColor();
    newDiv.style.width = `${defaultSize + 10 * i}px`;
    newDiv.style.height = `${defaultSize + 10 * i}px`;
    newDiv.style.border = `1px solid ${hexColor}`;
    newDiv.style.backgroundColor = hexColor;
    boxesWrapper.append(newDiv);
  }
  lastPosition += inputValue;
}

function destroyBoxes() {
  while (boxesWrapper.firstChild) {
    boxesWrapper.removeChild(boxesWrapper.firstChild);
  }
  lastPosition = 0;
}
