const jokeText = document.querySelector('#joke-text');
const jokeBtn = document.querySelector('#joke-btn');

const baseUrl = 'https://icanhazdadjoke.com/';

const generateJoke = async () => {
  let loading = `<span class='loading'>Loading...</span>`;
  jokeBtn.children[1].innerHTML = loading;
  try {
    const response = await fetch(baseUrl, {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    jokeText.innerHTML = data.joke;
    jokeBtn.children[1].innerHTML = 'Get Joke';
  } catch (error) {
    jokeText.innerHTML = `<span class='danger'>Oops! Something went wrong. ${error}</span>`;
    jokeBtn.children[1].innerHTML = 'Get Joke';
  }
};

jokeBtn.addEventListener('click', generateJoke);
