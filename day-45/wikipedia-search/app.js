const form = document.getElementsByTagName('form')[0];

const fetchResults = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayResults(data.query.search);
  } catch (error) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    resultsDiv.innerHTML = `
    <div class="alert alert-danger" role="alert">
      ${error}
      Please try again later!
    </div>`;
  }
};

const displayResults = (results) => {
  if (results.length === 0) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    resultsDiv.innerHTML = `
    <div class="alert alert-danger" role="alert">
      No results found!
    </div>`;
  } else {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    results.forEach(
      (result) =>
        (resultsDiv.innerHTML += `
        <div class="result">
          <a href="https://en.wikipedia.org/?curid=${
            result.pageid
          }" target="_blank">
          <h3 class="title">${result.title}</h3>
          </a>
          <a href="https://en.wikipedia.org/?curid=${
            result.pageid
          }" target="_blank">${`https://en.wikipedia.org/?curid=${result.pageid}`}</a>
          <p>${result.snippet}</p>
        </div>
      `)
    );
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.getElementById('search');
  const value = input.value;
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${value}`;
  fetchResults(url);
});
