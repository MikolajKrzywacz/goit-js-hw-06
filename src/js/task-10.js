function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesWrapper = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
// console.log(input);

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

// (input.addEventListener("input", (ev) => {
//   inputValue = Number(ev.currentTarget.value);
//   console.log("creation", inputValue);
// }))

// const box = document.getElementById("boxes");
// const input = document.querySelector("input");
// const creation = document.querySelector("[data-create");
// const destruction = document.querySelector("[data-destroy]");
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };
// let amount = 0;
// input.addEventListener("input", (ev) => {
//   amount = Number(ev.currentTarget.value);
//   console.log("creation", amount);
// });
// // destruction.addEventListener("click", (ev) => {
// //   amount = 0;
// //   input.value = 0;
// //   console.log("destr", amount);
// // });
// console.log(creation);
// creation.addEventListener("click", createBoxes);
// function createBoxes(amount) {
//   console.log("input:", input.value);
//   console.log("creating...", typeof amount);
//   for (let i = 1; i <= amount; i++) {
//     console.log("creating..");
//     const newBox = document.createElement("div");
//     box.append(newBox);
//     let sizer = 30 + i * 10;
//     newBox.style.width = `30 + ${sizer} * 10 px`;
//     newBox.style.height = `30 + ${sizer} * 10 px`;
//     newBox.style.backgroundColor = getRandomHexColor();
//     console.log(newBox);
//   }
// };
