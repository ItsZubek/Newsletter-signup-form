const mail = document.querySelector('#email');
const form = document.querySelector('#formComponent');
const errorMsg = document.querySelector('#error-message');
const successMsg = document.querySelector('#successMessage');
const dismissBtn = document.querySelector('#dismissBtn');
const formWrapper = document.querySelector('#signupForm');
const successMail = document.querySelector('#successMail');

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(mail.value.length === 0) {
      errorMsg.classList.remove('invisible');
      mail.classList.add('input-error');
    }
    else {
      if(emailRegExp.test(mail.value)) {
        //remove error and proceed with the success message
        errorMsg.classList.add('invisible');
        mail.classList.remove('input-error');
        formWrapper.classList.add('invisible');
        successMsg.classList.remove('invisible');
        successMail.textContent = mail.value;
      }
      else {
        errorMsg.classList.remove('invisible');
        mail.classList.add('input-error');
      }
    }
  });
  dismissBtn.addEventListener('click', () => {
    formWrapper.classList.remove('invisible');
    successMsg.classList.add('invisible');
  })