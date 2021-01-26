import React, { useState } from "react";
import axios from "axios";
import { debounce } from "lodash";

function AsideLeft() {
  const [weatherData, setWeatherData] = useState({
    weather: [{ id: "", description: "" }],
    main: { temp: "", temp_min: "", temp_max: "" },
    name: "",
    sys: { country: "" },
  });
  const [searchVal, setSearchVal] = useState("");
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [tempType, setTempType] = useState("fahrenheit");

  const handleSearch = debounce((e) => {
    setSearchVal(e.target.value);
  }, 500);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${searchVal}&appid=107a420b6f4b7dd8c2243eb7a310e6fe`;
    axios
      .get(weatherAPI)
      .then((weatherRes) => {
        setShowResult(true);
        setWeatherData({
          weather: weatherRes.data.weather,
          main: weatherRes.data.main,
          name: weatherRes.data.name,
          sys: weatherRes.data.sys,
        });
        setError("");
      })
      .catch((err) => setError(err));
  };

  const convertKtoF = (temp, type) => {
    return type === "fahrenheit"
      ? Math.floor(((temp - 273.15) * 9) / 5 + 32)
      : Math.floor(temp - 273.15);
  };

  const handleTempTypeChange = (e) => {
    setTempType(e.target.value);
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
        <input
          checked={tempType === "fahrenheit"}
          onChange={handleTempTypeChange}
          type="radio"
          id="fahrenheit"
          name="degree"
          value="fahrenheit"
        />{" "}
        <label htmlFor="fahrenheit">Fahrenheit</label>
        <br />
        <input
          onChange={handleTempTypeChange}
          type="radio"
          id="celsius"
          name="degree"
          value="celsius"
        />{" "}
        <label htmlFor="celsius">Celsius</label>
        <br />
        <input id="submit" type="submit" value="Submit" />
      </form>
      {showResult && (
        <section className="search-result">
          <i className={`wi wi-owm-${weatherData.weather[0].id} display-1`}></i>
          <div className="result-description">
            <span>
              {weatherData.name}, {weatherData.sys.country}
            </span>
            <h3>{convertKtoF(weatherData.main.temp, tempType)}&deg;</h3>
            <h6>
              <span>
                Low: {convertKtoF(weatherData.main.temp_min, tempType)}&deg;
              </span>
              {" - "}
              <span>
                High: {convertKtoF(weatherData.main.temp_max, tempType)}&deg;
              </span>
            </h6>
            <h4>{weatherData.weather[0].description}</h4>
          </div>
        </section>
      )}
    </aside>
  );
}

export default AsideLeft;
