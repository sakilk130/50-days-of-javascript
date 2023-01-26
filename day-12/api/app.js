const getLocationBtn = document.getElementById('get-location');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const result = document.querySelectorAll('.result');
const error = document.getElementById('error');
const displayHideAndShow = (showOrHide) => {
  result.forEach((item) => {
    item.style = `display: ${showOrHide}`;
  });
};

getLocationBtn.addEventListener('click', () => {
  if (!navigator.geolocation) {
    displayHideAndShow('none');
    error.textContent = 'Geolocation is not supported by your browser';
    return;
  }
  navigator.permissions
    .query({ name: 'geolocation' })
    .then(function (result) {
      if (result.state == 'denied') {
        displayHideAndShow('none');
        error.textContent = 'Permission to use geolocation was denied';
        return;
      }
    })
    .catch(function (err) {
      displayHideAndShow('none');
      error.textContent = 'Error: ' + err;
      return;
    });

  navigator.geolocation.getCurrentPosition((position) => {
    latitude.textContent = position.coords.latitude;
    longitude.textContent = position.coords.longitude;
    displayHideAndShow('flex');
    error.textContent = '';
  });
});
