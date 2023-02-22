 
var counterValue = 0;
const counter = document.querySelector("#counter");
const value = document.querySelector('#value');

counter.addEventListener("click", handleClick);
// console.log('button: ', button);
function handleClick(e){

    if (e.target.type != 'button') {

        return;
    }

    if (e.target.dataset.action != 'decrement') {
        console.log(++counterValue);
        value.textContent = counterValue;

        return;
    }
    console.log(--counterValue);
    value.textContent = counterValue;
}