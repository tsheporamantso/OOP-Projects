import products from './utils/products.js';
import getElement from './utils/getElement.js';

let filteredProducts = [...products];

const productsContainer = getElement('.product-container');

const displayProducts = () => {
  productsContainer.innerHTML = filteredProducts.map(
    ({ id, image, title, price, company }) => {
      return `
    <article class="product">
          <img
            src="${image}"
            alt=""
            class="product-img img"
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
          </footer>
        </article>
    `;
    }
  );
};
displayProducts();
