/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
import articles from './utils/data.js';

const articlesContainer = document.querySelector('.articles');

const articleData = articles

  .map(({ title, date, length, snippet }) => {
    const formatDate = moment(date).format('MMMM Do YYYY');
    return `
  <article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>${snippet}</p>
        </article>
      `;
  })
  .join('');
articlesContainer.innerHTML = articleData;
