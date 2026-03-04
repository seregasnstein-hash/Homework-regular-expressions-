let formRegistration = document.querySelector(".form_registration");

let userEmail = document.querySelector("#user_email");
let userPassword = document.querySelector("#user_password");
let userPasswordRepeat = document.querySelector("#user_password_repeat");

let formErrorEmail = document.querySelector(".form_error_email");
let formErrorPassword = document.querySelector(".form_error_password");
let formErrorRepeat = document.querySelector(".form_error_repeat");

const patternEmail = /^([a-z\._-]{3,})@([a-z]{2,})(\.[a-z]{2,})+$/i;
const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/;

formRegistration.addEventListener("submit", (event) => {
  event.preventDefault();
  
  let isValid = true;

  if (userEmail.value.trim() === "" || !patternEmail.test(userEmail.value)) {
    formErrorEmail.style.display = "block";
    isValid = false;
  } else {
    formErrorEmail.style.display = "none";
  }

  if (userPassword.value.trim() === "" ||!patternPassword.test(userPassword.value)) {
    formErrorPassword.style.display = "block";
    isValid = false;
  } else {
    formErrorPassword.style.display = "none";
  }

  if (userPassword.value.trim() === "" || userPassword.value !== userPasswordRepeat.value) {
    formErrorRepeat.style.display = "block";
    isValid = false;
  } else {
    formErrorRepeat.style.display = "none";
  }

  if (isValid) {
    alert("вы прошли проверку");
    userEmail.value = '';
    userPassword.value = '';
    userPasswordRepeat.value = '';
  }
});
