function showCity(response) {
  showTemperature = document.querySelector("#temperature");
  actualTemperature = response.data.temperature.current;
  let displayValue = document.querySelector("#city");

  displayValue.innerHTML = response.data.city;
  showTemperature.innerHTML = Math.round(actualTemperature);
}

function searchCity(city) {
  let apiKey = "c703302f0df7o6btdae0e7937b001fe4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(showCity);
}

function handleSearchValue(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchValue);
