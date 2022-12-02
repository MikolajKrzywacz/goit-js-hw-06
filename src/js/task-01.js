"use strict";

const categoryList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryList.length}`);

let list = document.querySelector("#categories");
let items = list.children;
// console.log(items.length);

for (let i = 0; i < items.length; i++) {
  let item = items[i];
  let Categorytitle = item.querySelector("h2").textContent;
  let listElements = item.querySelector("ul").querySelectorAll("li");

  console.log(`Category: ${Categorytitle} \n
     Elements: ${listElements.length}`);
}
