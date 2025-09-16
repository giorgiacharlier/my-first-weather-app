function handleSearchValue(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let displayValue = document.querySelector("#city");
  displayValue.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchValue);
