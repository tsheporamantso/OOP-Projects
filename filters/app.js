import products from './utils/products.js';
import getElement from './utils/getElement.js';

// copy of of products array
let filteredProducts = [...products];

// element selection
const productsContainer = getElement('.product-container');
const form = getElement('.input-form');
const searchInput = getElement('.search-input');
const companiesDOM = getElement('.companies');

// display all products
const displayProducts = () => {
  // no match condition
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6 class="text-red-600">Sorry, no products matched your search.</h6>`;
    return;
  }

  // display all products
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

// filter search
form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter(({ title }) => {
    return title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

// filter buttons
const displayButtons = () => {
  const buttons = [
    'all',
    ...new Set(
      products.map(({ company }) => {
        return company;
      })
    ),
  ];
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `
    <button class="company-btn" data-id="${company}">${company}</button>
    `;
    })
    .join('');
};

displayButtons();

// filter buttons event listener
companiesDOM.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('company-btn')) {
    if (el.dataset.id === 'all') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
  }
  searchInput.value = '';
  displayProducts();
});
