const textInput = document.getElementById('text-input');
const searchButton = document.getElementById('search-button');
const errorDiv = document.querySelector('.error');

const api = {
  key: '28fd15358cdecbc1a1dfef367e71acef',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const dateBuilder = (d) => {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};

const searchCountryWiseWeather = async () => {
  try {
    if (textInput.value === '') {
      throw new Error('Please enter a city name');
    }
    searchButton.textContent = 'Searching...';
    const response = await fetch(
      `${api.base}weather?q=${textInput.value}&units=metric&appid=${api.key}`
    );
    const data = await response.json();
    if (data.cod === '404') {
      throw new Error('City not found');
    }
    searchButton.textContent = 'Search';
    displayWeather(data);
  } catch (error) {
    errorDiv.style.display = 'block';
    errorDiv.textContent = error.message;
    searchButton.textContent = 'Search';
    setTimeout(() => {
      errorDiv.style.display = 'none';
    }, 2000);
  }
};

const displayWeather = (data) => {
  const country = document.querySelector('#country-name');
  const dateDiv = document.querySelector('#date');
  const temp = document.querySelector('.temp');
  country.textContent = `${data.name}, ${data.sys.country}`;
  dateDiv.textContent = dateBuilder(new Date());
  temp.innerHTML = `
  <p>Temp : ${Math.round(data.main.temp)}°C</p>
  <p>Weather : ${data.weather[0].main}</p>
  <p>Temp Range : ${
    Math.round(data.main.temp_min) + '°C - ' + Math.round(data.main.temp_max)
  }°C</p>
  `;
};

searchButton.addEventListener('click', searchCountryWiseWeather);
