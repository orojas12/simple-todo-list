"use strict";

const list = document.querySelector("ul");
const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

input.addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    const item = document.createElement("li");
    const childTxt = document.createElement("p");
    const childBtn = document.createElement("button");

    childTxt.textContent = e.target.value;
    childBtn.innerHTML = "&times;";

    childBtn.addEventListener("click", deleteItem);

    item.appendChild(childTxt);
    item.appendChild(childBtn);
    list.appendChild(item);
    e.target.value = "";
  }
});

const deleteItem = function (e) {
  list.removeChild(e.target.parentElement);
};

buttons.forEach(function (element) {
  element.addEventListener("click", deleteItem);
});
