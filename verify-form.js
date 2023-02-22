const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const empty = "";

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  checkInputs();
}

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;

  usernameValue === empty
    ? setErrorFor(username, "O nome de usuário é obrigatório")
    : setSuccessFor(username);

  if (emailValue === empty) {
    setErrorFor(email, "O email é obrigatório");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido");
  } else {
    setSuccessFor(email);
  }

   if (passwordValue === empty) {
    setErrorFor(password, "A senha é obrigatória");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres");
  } else {
    setSuccessFor(password);
  }

  if (confirmPasswordValue === empty) {
    setErrorFor(confirmPassword, "A confirmação de senha é obrigatória");
  } else if (confirmPasswordValue !== passwordValue) {
    setErrorFor(confirmPassword, "As senhas não conferem");
  } else {
    setSuccessFor(confirmPassword);
  }

  const formControl = form.querySelectorAll(".form-control")
  const isFormValid = [...formControl].every((formControl => {
    return formControl.classList.contains("success")
  }))

  if (isFormValid) {
    toggleModal()
  }
}

function setErrorFor(input, msg) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.textContent = msg;
  formControl.classList.add("error");
  formControl.classList.remove("success");
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
  formControl.classList.remove("error");
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
