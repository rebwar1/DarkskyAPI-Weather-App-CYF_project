import con from "../render/page.js";
// import Skycons from "../render/skycons.js";

function callApi(api) {
  return fetch(api)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const { temp_c, humidity, temp_f } = data.current;
      const { text, icon } = data.current.condition;
      const { country, name, region, localtime, tz_id } = data.location;
      let iconn = text;
      // setIcons(iconn, document.querySelector(".icon"));

      // const { date } = data.forecast.forecastday[0];
      con(temp_c, text, localtime, icon, country, name, region, temp_f, tz_id);
      return {
        temp_c,
        humidity,
        text,
        icon,
        country,
        name,
        region,
        localtime,
        // date,
        temp_f,
      };
    })
    .catch(err => console.log(err));

  function setIcons(icon, iconID) {
    const skycons = new Skycons({ color: "white" });
    const currentIcon = icon.replace(/' '/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
}

export default callApi;
