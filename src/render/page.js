let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezone = document.querySelector(".location-timezone");
let temperatureSection = document.querySelector(".degree-section");
const temperatureSpan = document.querySelector(".span");
const temperatureDescription = document.querySelector(
  ".temperature-description"
);
const placeName = document.querySelector(".place-name");
const iconImg = document.querySelector(".icon");

function con(
  temp_c,
  text,
  localtime,
  icon,
  country,
  name,
  region,
  temp_f,
  tz_id
) {
  let tagle = "C";

  temperatureDegree.textContent = temp_c;
  temperatureSpan.textContent = "C";
  temperatureDescription.textContent = text;
  locationTimezone.textContent = `${tz_id}/${name}`;
  placeName.textContent = `Weather in ${country}, ${name}, ${region}`;

  iconImg.setAttribute("src", icon);
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
