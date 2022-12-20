const button = document.getElementById("submit-btn");

const form = document.loginForm;

button.addEventListener("click", (event) => {
  if (!form.email.value) {
    alert("Email is empty");
    return;
  }
  if (!validateEmail(form.email.value)) {
    alert("Invalid Email");
    return;
  }
  if (!form.password.value) {
    alert("Password is empty");
    return;
  }
  if (form.password.value.length < 6 || form.password.value.length > 8) {
    alert("Password should have a minimum length of 6 and maximum lenght of 8");
    return;
  }
  alert("Login Successful");
  return;
});

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
