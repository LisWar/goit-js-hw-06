
const fontCtrl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontCtrl.addEventListener("input", handleFontChange);
function handleFontChange(e) {
    const size = e.target.value;
    text.style.fontSize = `${size}px`;

    // console.log('e.target.value: ', e.target.value);
    
}