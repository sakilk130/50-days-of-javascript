const API_URL = 'https://api.github.com/users/';

const form = document.getElementsByTagName('form')[0];
const search = document.getElementById('search');
const profile = document.getElementById('profile');
const repos = document.getElementById('repos');
const errorMess = document.getElementById('error-message');

export { API_URL, form, search, profile, repos, errorMess };
