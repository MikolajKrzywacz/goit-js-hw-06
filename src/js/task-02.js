const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
ingredients.forEach((el) => {
  let item = document.createElement("li");
  item.classList.add("item");
  item.textContent = el;
  list.append(item);
});
