const search = document.querySelector('.search');

search.addEventListener('keyup', (e) => {
  const cityList = document.querySelectorAll('.city');

  cityList.forEach((city) => {
    const cityName = city.textContent;
    if (cityName.toLowerCase().includes(e.target.value.toLowerCase())) {
      city.style.display = 'flex';
    } else {
      city.style.display = 'none';
    }
  });
});
