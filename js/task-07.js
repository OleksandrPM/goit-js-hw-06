const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeControlEl.addEventListener('input', onFontSizeControlElInput);

function onFontSizeControlElInput(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
