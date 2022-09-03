'use strict';

const searchBtn = document.querySelector('.search--btn');
const searchError = document.querySelector('.error');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  searchError.style.display = 'block';

  setTimeout(() => {
    searchError.style.display = 'none';
  }, 3000);
});
