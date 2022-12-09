const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const anonymous = document.querySelector("#name-output").textContent;

nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim()) {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = anonymous;
  }
});
