function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes(e) {
  factory.innerHTML = "";
}

const base = 30;
const factory = document.querySelector("#boxes");
const controls = document.querySelector("#controls");

controls.addEventListener("click", makeBoxes);

function makeBoxes({target}) {
  const num = controls.querySelector("input").value;

  if (target.type != "button") {
    return;
  }
        // console.log('target.dataset: ', target.dataset);
        // console.log('target.dataset: ', target.dataset.create);


  if (target.dataset.create == "") {
    for (let index = 0; index < num; index++) {
      console.log(index);
      const color = getRandomHexColor();
      const size = base + 5*index;
      const markup = `<div style="background-color:${color}; width:${size}px; height:${size}px;"></div>` 
      factory.insertAdjacentHTML("beforeend", markup)
    }
    return;
  }
  destroyBoxes();
  
}