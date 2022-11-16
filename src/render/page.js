let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezone = document.querySelector(".location-timezone");
let temperatureSection = document.querySelector(".degree-section");
const temperatureSpan = document.querySelector(".span");
const temperatureDescription = document.querySelector(
  ".temperature-description"
);
const placeName = document.querySelector(".place-name");
const icon = document.querySelector(".icon");
function con(temp_c, text, localtime, icon, country, name, region, temp_f) {
  let tagle = "C";
  temperatureDegree.textContent = temp_c;
  temperatureSpan.textContent = "C";
  temperatureDescription.textContent = text;
  locationTimezone.textContent = localtime;
  placeName.textContent = `Weather in ${country}, ${name}, ${region}`;
  icon = "cdn.weatherapi.com/weather/64x64/night/113.png";

  //   let celsius = (temp_c - 32) * (5 / 9);

  temperatureSection.addEventListener("click", () => {
    if (tagle === "C") {
      temperatureDegree.textContent = temp_c;
      temperatureSpan.textContent = "C";
      tagle = "F";
    } else if (tagle === "F") {
      temperatureDegree.textContent = temp_f;
      temperatureSpan.textContent = "F";
      tagle = "C";
    }
  });
}

export default con;
