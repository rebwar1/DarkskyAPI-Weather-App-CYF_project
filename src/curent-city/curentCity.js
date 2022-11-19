import callApi from "../requstes/requste.js";

import "../assets/css/style.css";
import "../assets/scss/style.scss";

function curentCity() {
  let long;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      console.log("long" + long);
      console.log("lat" + lat);
      //   const proxy = "https://cors-anywhere.herokuapp.com/";
      // const api = `${proxy}https://api.weatherapi.com/v1/current.json?key=aaa0a595588249e785d221301221511&q=${lat},${long}`;

      const api = `https://api.weatherapi.com/v1/forecast.json?key=aaa0a595588249e785d221301221511&q=${lat},${long}&aqi=no`;
      callApi(api);
    });
  }
}

export default curentCity;
