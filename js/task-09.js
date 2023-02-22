function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widget = document.querySelector(".widget");
const colorValue = widget.querySelector(".color");
const colorBtn = widget.querySelector("button");

colorBtn.addEventListener("click", colorChange);
function colorChange(e) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorValue.textContent = color;
  
}