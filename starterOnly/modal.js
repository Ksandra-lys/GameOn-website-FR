function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  let form = document.querySelector("form")
  const validationPage = document.querySelector(".validationpage")
  modalbg.style.display = "block";
  form.style.display = "block"
  validationPage.style.display = "none"

}

// show validation message
function showValidationPage() {
  let form = document.querySelector("form")
  const validationPage = document.querySelector(".validationpage")
  form.style.display = "none"
  validationPage.style.display = "flex"
}

const closeBtn = document.querySelector(".close")
const background = document.querySelector(".bground")
closeBtn.addEventListener("click", () => {
  background.style.display = "none"
})

let validationPage = document.querySelector(".validationpage")
const closeValidationPage = document.querySelectorAll(".closevalidationpage")
closeValidationPage.forEach(btn => {
  btn.addEventListener("click", () => {
    background.style.display = "none"
  })
})

let form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  event.preventDefault()
  const firstName = document.getElementById("first").value
  const lastName = document.getElementById("last").value
  const email = document.getElementById("email").value
  const birthdate = document.getElementById("birthdate").value
  const quantity = document.getElementById("quantity").value
  const radioBtn = document.querySelectorAll('input[name="location"]')
  const checkbox1 = document.getElementById("checkbox1")
  
  //verify firstname
  const errorFirstName = document.getElementById("errorFirstName")
  let firstnameRegExp = new RegExp("^[a-zA-Z]")
  if (firstName.length < 2) {
    errorFirstName.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom")
    errorFirstName.setAttribute("data-error-visible", "true")
  } else if (!firstnameRegExp.test(firstName)) {
    errorFirstName.setAttribute("data-error", "Veuillez écrire correctement votre prénom")
    errorFirstName.setAttribute("data-error-visible", "true")
  } else {
    errorFirstName.removeAttribute("data-error")
    errorFirstName.setAttribute("data-error-visible", "false")
  }

  // verify lastname
  const errorLastName = document.getElementById("errorLastName")
  let lastnameRegExp = new RegExp("^[a-zA-Z]")
  if (lastName.length < 2) {
    errorLastName.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom")
    errorLastName.setAttribute("data-error-visible", "true")
  } else if (!lastnameRegExp.test(lastName)) {
    errorLastName.setAttribute("data-error", "Veuillez écrire correctement votre nom")
    errorLastName.setAttribute("data-error-visible", "true")
  } else {
    errorLastName.removeAttribute("data-error")
    errorLastName.setAttribute("data-error-visible", "false")
  }

  //verify email
  const errorEmail = document.getElementById("errorEmail")
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (email == "") {
    errorEmail.setAttribute("data-error", "Veuillez remplir le champ adresse e-mail.")
    errorEmail.setAttribute("data-error-visible", "true")
  } else if (!emailRegExp.test(email)) {
    errorEmail.setAttribute("data-error", "L'adresse mail n'est pas valide.")
    errorEmail.setAttribute("data-error-visible", "true")
  } else {
    errorEmail.removeAttribute("data-error")
    errorEmail.setAttribute("data-error-visible", "false")
  }

  //verify birthdate
  const birthdateValue = new Date(birthdate)
  const validDate = new Date()
  const errorDate = document.getElementById("errorDate")
  if (birthdate !== "" && birthdateValue < validDate) {
    errorDate.removeAttribute("data-error")
    errorDate.setAttribute("data-error-visible", "false")
  } else {
    errorDate.setAttribute("data-error", "Vous devez entrer votre date de naissance.")
    errorDate.setAttribute("data-error-visible", "true")
  }

  //verify number
  const errorNumber = document.getElementById("errorNumber")
  if (quantity !== "") {
    errorNumber.removeAttribute("data-error")
    errorNumber.setAttribute("data-error-visible", "false")
  } else {
    errorNumber.setAttribute("data-error", "Une valeur numérique doit etre saisie")
    errorNumber.setAttribute("data-error-visible", "true")
  }

  //verify radiobtn
  const errorRadioBtn = document.getElementById("errorRadioBtn")
  let isChecked = false
  for (let i = 0; i < radioBtn.length; i++) {
    if (radioBtn[i].checked) {
      isChecked = true
      break
    }
  }
  if (isChecked) {
    errorRadioBtn.removeAttribute("data-error")
    errorRadioBtn.setAttribute("data-error-visible", "false")
  } else {
    errorRadioBtn.setAttribute("data-error", "Vous devez choisir une option")
    errorRadioBtn.setAttribute("data-error-visible", "true")
  }

  //verify checkboxbtn
  const errorCheckboxBtn = document.getElementById("errorCheckboxBtn")
  if (checkbox1.checked) {
    errorCheckboxBtn.removeAttribute("data-error")
    errorCheckboxBtn.setAttribute("data-error-visible", "false")
  } else {
    errorCheckboxBtn.setAttribute("data-error", "Vous devez vérifier que vous acceptez les conditions.")
    errorCheckboxBtn.setAttribute("data-error-visible", "true")
  }
  if (firstName.length > 2 && firstnameRegExp.test(firstName) && lastName.length > 2 && lastnameRegExp.test(lastName)
    && email !== "" && emailRegExp.test(email) && birthdate !== "" && birthdateValue < validDate &&
    quantity !== "" && isChecked && checkbox1.checked) {
    form.reset()
    form.style.display = "none"
    validationPage.style.display = "block"
  }
})







