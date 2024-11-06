const getElement = function (selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`Pleact check ${selection}, selector does not exist!`);
};

const Gallery = function (element) {
  this.element = element;
  console.log(element);
};

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
