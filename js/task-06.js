const input = document.querySelector("input");
const requiredNumLength = Number(input.getAttribute("data-length"));

input.addEventListener("blur", () => {
  input.value.length === requiredNumLength
    ? input.classList.add("valid")
    : input.classList.add("invalid");
});
