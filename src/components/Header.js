import React from "react";

function Header() {
  return (
    <header>
      <img src={require("../images/weather.png").default} alt="weather logo" />
      <h1>React Weather App</h1>
    </header>
  );
}

export default Header;
