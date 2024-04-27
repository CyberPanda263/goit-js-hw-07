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
  for (let i = 0; i < amount; i++) {
  const div = document.createElement("div");
  div.style.width = `${sise}px`;
  div.style.height = `${sise}px`;
  div.style.backgroundColor = getRandomHexColor();
  boxes.append(div);
  sise = sise + 10;
  }
}

function deletEl() {
  const del = document.querySelector("#boxes");
  const delchildren = del.children;
  console.log(delchildren.length);
  for(let i = 0; i < delchildren.length; i++) {
    delchildren[i].parentNode.removeChild(delchildren[i]);
    let a = 0;
    a = a + 1;
    console.log(a);
  }
}


createButton.onclick = create;
destroyButton.onclick = deletEl;