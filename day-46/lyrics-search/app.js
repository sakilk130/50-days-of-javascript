const form = document.querySelector('#form');
const search = document.querySelector('#search');
const error = document.querySelector('.error');
const submitBtn = document.querySelector('#button');
const result = document.querySelector('#result');

const apiURL = 'https://api.lyrics.ovh';

const errorMessage = (message) => {
  error.style.display = 'block';
  error.innerHTML = message;
  setTimeout(() => {
    error.innerHTML = '';
    error.style.display = 'none';
  }, 3000);
};

const getLyrics = async (artist, songTitle) => {
  try {
    const response = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
    const data = await response.json();

    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
    result.innerHTML = '';
    result.innerHTML = `
      <h2><strong>${artist}</strong> - ${songTitle}</h2>
      <span>${lyrics}</span>
    `;
  } catch (error) {
    errorMessage('No lyrics found');
  }
};

const displaySongs = (songs) => {
  result.innerHTML = songs
    .map(
      (song) => `
    <li>
      <span><strong>${song.artist.name}</strong> - ${song.title}</span>
      <button class="get-lyrics-btn" onclick="getLyrics('${song.artist.name}', '${song.title}')">Get Lyrics</button>
      <hr/>
    </li>
  `
    )
    .join('');
};

const searchSongs = async (term) => {
  try {
    submitBtn.textContent = 'Searching...';
    submitBtn.disabled = true;
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();
    displaySongs(data.data);
    submitBtn.textContent = 'Search';
    submitBtn.disabled = false;
  } catch (error) {
    submitBtn.textContent = 'Search';
    submitBtn.disabled = false;
    errorMessage('Something went wrong');
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value.trim();
  if (!searchTerm) {
    errorMessage('Please type in a search term');
  } else {
    searchSongs(searchTerm);
  }
});
