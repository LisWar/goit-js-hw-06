
const validationInput = document.querySelector("#validation-input")

validationInput.addEventListener("blur", handleInput);
function handleInput({target}) {
    const num = target.dataset.length;
    const len = target.value.length;

    if (len == num) {
        target.classList.add("valid");
        target.classList.remove("invalid");
        return;
    }
    target.classList.remove("valid");
    target.classList.add("invalid");
    return;

    }
