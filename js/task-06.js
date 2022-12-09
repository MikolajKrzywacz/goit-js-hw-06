const input = document.querySelector("input");
const requiredNumLength = Number(input.getAttribute("data-length"));

input.addEventListener("blur", () => {
  if (input.value.length === requiredNumLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
