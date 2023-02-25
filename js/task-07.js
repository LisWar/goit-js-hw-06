
const fontCtrl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = `${fontCtrl.value}px`;

fontCtrl.addEventListener("input", handleFontChange);
function handleFontChange(e) {
    const size = e.target.value;
    text.style.fontSize = `${size}px`;
}