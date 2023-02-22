
const form = document.querySelector("form");
const formSubmit = form.querySelector("button")
// console.log('formSubmit: ', formSubmit);
// console.log('form: ', form);

// formSubmit.addEventListener()
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const {
        elements: { email, password }
      } = e.currentTarget;

      if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
        return;
      }
} 