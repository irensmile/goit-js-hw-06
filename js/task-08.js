const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const emailVal = form.elements.email.value;
  const passwordVal = form.elements.password.value;
  
  if (emailVal === "" || passwordVal === "") {
    return alert("Please fill in all the fields!");
  }
    const login = {
        email: emailVal,
        password: passwordVal
  }
  console.log(login);
  form.reset();
}
