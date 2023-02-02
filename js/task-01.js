function outputElementsValues(elementId) {
  const elementsChildren = document.querySelector(elementId).children;
  console.log(`Number of categories: ${elementsChildren.length}`);

  for (const child of elementsChildren) {
    console.log(`Category: ${child.querySelector('h2').textContent}`);
    console.log(`Elements: ${child.querySelector('ul').children.length}`);
  }
}

outputElementsValues('#categories');
