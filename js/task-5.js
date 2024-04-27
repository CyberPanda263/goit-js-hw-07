function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changecolor(event) {
  const color = getRandomHexColor();
  const body = document.querySelector("body");
  const colorString = document.querySelector(".color");
  body.style.backgroundColor = color;
  colorString.textContent = color;
}

const button = document.querySelector(".change-color");
button.onclick = changecolor;
