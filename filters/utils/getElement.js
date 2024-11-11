const getElement = (selection) => {
  const element = document.querySelector(selection);

  if (element) {
    return element;
  } else {
    throw new Error(
      `Please verify selected ${selection}, element does not exist!`
    );
  }
};

export default getElement;
