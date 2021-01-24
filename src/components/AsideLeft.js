import React, { useState, useEffect } from "react";
import axios from "axios";

function AsideLeft() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const weatherAPI =
      "http://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=107a420b6f4b7dd8c2243eb7a310e6fe";
    axios
      .get(weatherAPI)
      .then((weatherRes) =>
        setWeatherData({
          data: weatherRes.data,
        })
      )
      .catch((error) => console.error(error));
  }, []);
  return (
    <aside id="left-side">
      <h3 className="aside-h3">Find Current Weather Conditions</h3>
      <input id="search" type="text" placeholder="Enter city..." />
      <form>
        <input type="radio" id="fahrenheit" name="degree" value="fahrenheit" />
        <label htmlFor="fahrenheit">Fahrenheit</label>{" "}
        <input type="radio" id="celcius" name="degree" value="celcius" />
        <label htmlFor="celcius">Celcius</label>
        <br />
        <input id="submit" type="submit" value="Submit" />
      </form>
    </aside>
  );
}

export default AsideLeft;
