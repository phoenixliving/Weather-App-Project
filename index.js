let dateElement = document.querySelector("#date");
let currentTime = new Date();
let hrs = currentTime.getHours();
let minutes = currentTime.getMinutes();
let day = currentTime.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursay",
  "Friday",
  "Saturday"
];

dateElement.innerHTML = `${days[day]} ${hrs}:${minutes}`;


function displayTemperature(response) {
  document.querySelector("#display-city").innerHTML = response.data.name;
  document.querySelector("#display-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
  let units = "metric";
  let city = document.querySelector("#city-query").value;
  let apiUrl = `
  https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemperature);
}

let form = document.querySelector("#search-city");
form.addEventListener("submit", search);
