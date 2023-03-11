import { errorMessage, getData } from './js/functions.js';
import * as variables from './js/variables.js';

variables.form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (variables.search.value === '') {
    errorMessage('Please enter a username');
    return;
  }
  getData(variables.search.value);
});
