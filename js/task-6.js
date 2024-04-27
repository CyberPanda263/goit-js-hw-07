function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]")
let amount;

function create() {
  const input = document.querySelector("input");
  const val = input.target;
  const value = Number(input.value);
  if(value >= 1 && value <= 100) {
    amount = value;
    const div = document.querySelector("#boxes");
    if(div.children.length > 0) {
      deletEl()
    }
    createBoxes(amount);
  }
  document.querySelector('input[type="number"]').value = "";
}

function createBoxes(amount) {
  const boxes = document.querySelector("#boxes");
  let sise = 30;
  const boxArray = [];
  for (let i = 0; i < amount; i++) {
  const div = document.createElement("div");
  div.style.width = `${sise}px`;
  div.style.height = `${sise}px`;
  div.style.backgroundColor = getRandomHexColor();
  boxArray.push(div);
  sise = sise + 10;
  }
  boxes.append(...boxArray);
}

function deleteEl() {
  const del = document.querySelector("#boxes");
  del.innerHTML = "";
}


createButton.onclick = create;
destroyButton.onclick = deleteEl;