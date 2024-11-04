/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
const getElement = function (selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check ${selection} selector, no such element exists!`
  );
};

getElement('.second-counter');

class Counter {
  constructor(element, value) {
    this.element = element;
    this.value = value;
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.resetBtn = element.querySelector('.reset');
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;

    // bind function
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease);
    this.resetBtn.addEventListener('click', this.reset);
  }

  increase() {
    this.value += 1;
    this.valueDOM.textContent = this.value;
  }

  decrease() {
    this.value -= 1;
    this.valueDOM.textContent = this.value;
  }

  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);
