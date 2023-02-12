const inputEl = document.querySelector('#controls input');
const createButtonEl = document.querySelector('#controls [data-create]');
const destroyButtonEl = document.querySelector('#controls [data-destroy]');
const boxesEl = document.querySelector('#boxes');

let amount;

inputEl.addEventListener('input', onInputElInput);
createButtonEl.addEventListener('click', onCreateButtonElClick);
destroyButtonEl.addEventListener('click', onDestroyButtonElClick);

function onInputElInput(event) {
  amount = parseInt(event.currentTarget.value);
}

function onCreateButtonElClick(event) {
  createBoxes(amount);
}

function onDestroyButtonElClick(event) {
  destroyBoxes();
}

function createBoxes(amount) {
  let startWidth = 30;
  let startHeight = 30;
  let htmlNodeString = '';

  for (let i = 0; i < amount; i += 1) {
    htmlNodeString += createBoxHtml(startWidth, startHeight, getRandomHexColor());
    startWidth += 10;
    startHeight += 10;
  }

  boxesEl.insertAdjacentHTML('afterbegin', htmlNodeString);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

function createBoxHtml(width, height, color) {
  return `<div style="width: ${width}px; height: ${height}px; background-color: ${color};"></div>`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
