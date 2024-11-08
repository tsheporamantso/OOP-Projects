/* eslint-disable comma-dangle */
const getElement = (selection) => {
  const element = document.querySelectorAll(selection);

  if (element) {
    return element;
  }
  throw new Error(
    `Please verify selected ("${selection}"), no such element exist!`
  );
};

export default getElement;
