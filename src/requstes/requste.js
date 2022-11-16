import con from "../render/page.js";

function callApi(api) {
  return fetch(api)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const { temp_c, humidity, temp_f } = data.current;
      const { text, icon } = data.current.condition;
      const { country, name, region, localtime } = data.location;

      // const { date } = data.forecast.forecastday[0];
      con(temp_c, text, localtime, icon, country, name, region, temp_f);
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
      // return {
      //   temp_c,
      //   humidity,
      //   text,
      //   icon,
      //   country,
      //   name,
      //   region,
      //   localtime,
      //   date,
      // };
    })
    .catch(err => console.log(err));
}

export default callApi;
