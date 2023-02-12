const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', onNameInputElInput);

function onNameInputElInput(event) {
  if (event.currentTarget.value === '') {
    nameOutputEl.textContent = 'Anonymous';
  } else {
    nameOutputEl.textContent = event.currentTarget.value;
  }
}
