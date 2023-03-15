const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const firstnameValue = firstname.value;
    const lastnameValue = lastname.value;
    const emailValue = email.value;
    const numberValue = number.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    if(firstnameValue === "") {
        setErrorFor(firstname, "Seu primeiro nome é obrigatório");
    } else {
        setSuccessFor(firstname);
    }
    if(lastnameValue === "") {
        setErrorFor(lastname, "Seu  sobrenome é obrigatório");
    } else {
        setSuccessFor(lastname);
    }
    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório.");
      } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.");
      } else {
        setSuccessFor(email);
      }
      if(numberValue === "") {
        setErrorFor(number, "Seu  celular é obrigatório");
    } else {
        setSuccessFor(number);
    }
    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatória.");
      } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres");
      } else {
        setSuccessFor(password);
      }
    
      if (confirmPasswordValue === "") {
        setErrorFor(password, "A confirmação de senha é obrigatória.");
      } else if (confirmPasswordValue !== passwordValue) {
        setErrorFor(password, "As senhas não conferem.");
      } else {
        setSuccessFor(password);
      }
      const formControls = form.querySelectorAll(".input-box");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "input-box success";
    });

    if (formIsValid) {
        console.log("O formulário está 100% válido!");
    } else {
        console.log("O formulário está incompleto")
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "input-box error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = "input-box success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
  const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }