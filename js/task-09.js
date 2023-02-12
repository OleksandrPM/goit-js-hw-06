const bodyEl = document.querySelector('body');
const colorSpanEl = document.querySelector('.color');
const changeColorButtonEl = document.querySelector('.change-color');

changeColorButtonEl.addEventListener('click', onChangeColorButtonElClick);

function onChangeColorButtonElClick(event) {
  const color = `${getRandomHexColor()}`;

  colorSpanEl.textContent = color;
  bodyEl.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
