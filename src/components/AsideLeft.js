import React, { useState } from "react";
import axios from "axios";
import { debounce } from "lodash";

function AsideLeft() {
  const [weatherData, setWeatherData] = useState({
    weather: [{ id: "", description: "" }],
    main: { temp: "", temp_min: "", temp_max: "" },
  });
  const [searchVal, setSearchVal] = useState("");
  //   const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSearch = debounce((e) => {
    setSearchVal(e.target.value);
  }, 300);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${searchVal}&appid=107a420b6f4b7dd8c2243eb7a310e6fe`;
    axios
      .get(weatherAPI)
      .then((weatherRes) =>
        setWeatherData({
          weather: weatherRes.weather,
          main: weatherRes.main,
        })
      )
      .catch((err) => setError(err));
  };

  return (
    <aside id="left-side">
      <h3 className="aside-h3">Find Current Weather Conditions</h3>
      <h3 className="aside-h3">Of Any City In The World</h3>
      <input
        onChange={handleSearch}
        id="search"
        type="text"
        placeholder="Enter city..."
      />
      {error && <div id="error">There is no such city in the world</div>}
      <form onSubmit={handleFormSubmit}>
        <input type="radio" id="fahrenheit" name="degree" value="fahrenheit" />{" "}
        <label htmlFor="fahrenheit">Fahrenheit</label>
        <br />
        <input type="radio" id="celcius" name="degree" value="celcius" />{" "}
        <label htmlFor="celcius">Celcius</label>
        <br />
        <input id="submit" type="submit" value="Submit" />
      </form>
      <section className="search-result">
        <i className="wi wi-owm-804 display-1"></i>
      </section>
    </aside>
  );
}

export default AsideLeft;
