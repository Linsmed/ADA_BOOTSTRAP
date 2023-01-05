const button = document.getElementById("btn");

const form = document.myForm;

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
  if (form.password.value.length < 8 || form.password.value.length > 10) {
    alert("Password must  have a minimum length of 8 and maximum lenght of 10");
    return;
  }
  alert("You have succesfully logged in");
  return;
});

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
