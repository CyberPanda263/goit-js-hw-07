const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]")
const boxes = document.querySelector("#boxes");
let amount;

createButton.addEventListener("click", create);
destroyButton.addEventListener("click", deleteEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function create() {
  const input = document.querySelector("input");
  const value = Number(input.value);
  if(value >= 1 && value <= 100) {
    amount = value;
    deleteEl();
    createBoxes(amount);
  }
  document.querySelector('input[type="number"]').value = "";
}

function createBoxes(amount) {
  let size = 30;
  const boxArray = [];
  for (let i = 0; i < amount; i++) {
  const div = document.createElement("div");
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  div.style.backgroundColor = getRandomHexColor();
  boxArray.push(div);
  size = size + 10;
  }
  boxes.append(...boxArray);
}

function deleteEl() {
  boxes.innerHTML = "";
}