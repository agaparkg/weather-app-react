import React from 'react';
import weatherLogo from '../images/weather.png';

function Header() {
  return (
    <header>
      <img src={weatherLogo} alt='weather logo' />
      <h1>React Weather App</h1>
    </header>
  );
}

export default Header;
