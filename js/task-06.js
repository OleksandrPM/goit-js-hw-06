const validationInputEl = document.querySelector('#validation-input');
const inputLength = validationInputEl.dataset.length;

validationInputEl.addEventListener('blur', onValidationInputElBlur);
validationInputEl.addEventListener('focus', onValidationInputElFocus);

function onValidationInputElBlur(event) {
  if (event.currentTarget.value.length !== inputLength) {
    validationInputEl.classList.add('invalid');
  } else {
    validationInputEl.classList.add('valid');
  }
}

function onValidationInputElFocus() {
  validationInputEl.classList.remove('invalid');
  validationInputEl.classList.remove('valid');
}
