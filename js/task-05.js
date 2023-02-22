
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handleInput);

function handleInput(e) {
    if (e.currentTarget.value === "") {
        output.textContent = "Anonymous";
        return;
    }

    output.textContent = e.currentTarget.value;
    return;
}