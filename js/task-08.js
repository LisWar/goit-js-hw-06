
const form = document.querySelector("form");
const formSubmit = form.querySelector("button")

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    if (form.elements.email.value === "" || form.elements.password.value === "") {
      alert("Please fill in all the fields!");
      return;
    }

    const res = {email: form.elements.email.value, password: form.elements.password.value};
    console.log('res: ', res);
    form.reset();
} 
