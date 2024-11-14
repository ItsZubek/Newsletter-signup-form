const mail = document.querySelector('#email');
const form = document.querySelector('#signupForm');
const errorMsg = document.querySelector('#error-message');

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
      }
      else {
        errorMsg.classList.remove('invisible');
        mail.classList.add('input-error');
      }
    }
    });