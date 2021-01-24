import React, { useState, useEffect } from "react";
import LocalTime from "./LocalTime";
import axios from "axios";

function AsideRight() {
  const [currLocData, setCurrLocData] = useState({
    city: "",
    state: "",
    country: "",
  });

  const [currLocWeatherCond, setCurrLocWeatherCond] = useState({
    weather: [{ id: "", description: "" }],
    main: { temp: "", temp_min: "", temp_max: "" },
  });

  useEffect(() => {
    const currLocationAPI = "https://extreme-ip-lookup.com/json/";
    axios
      .get(currLocationAPI)
      .then(async (currLocationRes) => {
        const currWeatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${currLocationRes.data.city}&appid=107a420b6f4b7dd8c2243eb7a310e6fe`;
        const res = await fetch(currWeatherApi);
        const result = await res.json();
        setCurrLocWeatherCond({
          weather: result.weather,
          main: result.main,
        });
        setCurrLocData({
          city: currLocationRes.data.city,
          state: currLocationRes.data.region,
          country: currLocationRes.data.countryCode,
        });
      })
      .catch((error) => console.error(error));
  }, []);

  const convertKtoC = (temp) => {
    return Math.floor(((temp - 273.15) * 9) / 5 + 32);
  };

  const minMaxTemp = (min, max) => {
    return (
      <h3>
        <span className="py-4">{min}&deg;</span>
        {" - "}
        <span className="py-4">{max}&deg;</span>
      </h3>
    );
  };

  const customCl = `wi wi-owm-${currLocWeatherCond.weather[0].id} display-1`;

  return (
    <aside id="right-side">
      <h3 className="aside-h3">Local Weather</h3>
      <div className="current-location">
        <span>{currLocData.city}</span>
        <br />
        <span>{currLocData.state}</span>
        {", "}
        <span>{currLocData.country}</span>
      </div>
      <i className={customCl}></i>
      <h1 className="py-2">{convertKtoC(currLocWeatherCond.main.temp)}&deg;</h1>
      {minMaxTemp(
        convertKtoC(currLocWeatherCond.main.temp_min),
        convertKtoC(currLocWeatherCond.main.temp_max)
      )}
      <h4 className="py-3">{currLocWeatherCond.weather[0].description}</h4>
      <LocalTime />
    </aside>
  );
}

export default AsideRight;
