import callApi from "../requstes/requste.js";

const button = document.getElementById("searchButton");
let placeName = document.querySelector("#PlaceName");

function callBYName() {
  button.addEventListener("click", e => {
    e.preventDefault();
    let place = placeName.value;
    const apiBYName = `https://api.weatherapi.com/v1/current.json?key=aaa0a595588249e785d221301221511&q=${place}&aqi=no`;
    fetch(apiBYName)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
    callApi(apiBYName);
  });
}

export default callBYName;
