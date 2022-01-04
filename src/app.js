/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const form = document.querySelector("form[name='form1']");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  let alert = document.getElementById("form-invalid");
  let cardValid = isValidInput("card");
  let cvcValid = isValidInput("cvc");
  let amountValid = isValidInput("amount");
  let firstNameValid = isValidInput("first-name");
  let lastNameValid = isValidInput("last-name");
  let cityValid = isValidInput("city");
  let postalCodeValid = isValidInput("postal-code");
  let stateValid = isValidInput("state", "select");
  let messageValid = isValidInput("message", "textarea");

  if (
    !cardValid ||
    !cvcValid ||
    !amountValid ||
    !firstNameValid ||
    !lastNameValid ||
    !cityValid ||
    !postalCodeValid ||
    !stateValid ||
    !messageValid
  ) {
    alert.classList.remove("d-none");
  } else {
    alert.classList.add("d-none");
  }
}

function isValidInput(inputName, type = "input") {
  let input = document.querySelector(`${type}[name='${inputName}']`);
  if (getCleanLen(input) == 0) {
    input.classList.add("is-invalid");
    return false;
  } else {
    input.classList.remove("is-invalid");
    return true;
  }
}

function getCleanLen(input) {
  return input.value.trim().length;
}
