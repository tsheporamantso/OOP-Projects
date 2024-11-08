/* eslint-disable import/extensions */
import getElement from './utils/getElement.js';
import updateCount from './utils/updateCount.js';

const numbers = [...getElement('.number')];

numbers.forEach((number) => {
  updateCount(number);
});
