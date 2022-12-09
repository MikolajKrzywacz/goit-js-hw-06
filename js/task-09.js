function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

button.addEventListener("click", () => {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = `${color}`;
  spanColor.textContent = `${color}`;
});
