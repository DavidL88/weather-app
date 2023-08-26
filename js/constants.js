export const API_KEY = "88af7171729df8cce0e591ed2b0388ed";
export const BASE_API = "https://api.openweathermap.org/data/2.5/";
const city = "Tampico";
const humidityAja = document.getElementById("current-weather-humidity");
export const weatherConditionsCodes = {
  2: "rainy",
  3: "cloudy",
  5: "rainy",
  6: "drizzle",
  8: "cloudy",
  7: "clean",
};

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
)
  .then((response) => response.json())
  .then((data) => {
    if (data.main && data.main.humidity !== undefined) {
      const humidity = data.main.humidity;
      humidityAja.textContent = `${humidity}%`;
    } else {
      console.log("No se pudo obtener la información de humedad.");
    }
  })
  .catch((error) => {
    console.error("Ha ocurrido un error:", error);
  });
