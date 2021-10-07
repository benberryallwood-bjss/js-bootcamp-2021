// console.log("Running weather.js...");

// weatherapi.com key:
const weatherAPIKey = "";

const weatherAPIUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}`;

// DOM Elements:
const weatherResult = document.querySelector(".weather-result");
const temperatureHeading = document.getElementById("temperature");
const locationNameHeading = document.getElementById("locationName");
const placeForm = document.querySelector(".place-form");

const getWeather = async (event) => {
  event.preventDefault();

  const placeNameField = document.getElementById("placeId");

  const requestUrl = `${weatherAPIUrl}&q=${placeNameField.value}&api=no`;

  try {
    const response = await fetch(requestUrl);
    const {
      location: { name },
      current: {
        temp_c,
        condition: { icon },
      },
    } = await response.json();

    // Update temp and place name
    temperatureHeading.innerHTML = `${temp_c} &deg;C`;
    locationNameHeading.innerHTML = name;

    const weatherIcon = document.createElement("img");
    weatherIcon.src = icon;

    // Remove current icon and add new one
    weatherResult.removeChild(weatherResult.lastChild);
    weatherResult.appendChild(weatherIcon);

    placeNameField.value = "";
  } catch (err) {
    console.error(err.message);
  }
};

placeForm.addEventListener("submit", getWeather);
