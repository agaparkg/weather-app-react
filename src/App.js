import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .request(options)
      .then(function (response) {
        console.log({ resp: response.list });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header>
          <img src={require("./images/weather.png")} alt="" />
          <h1>React Weather App</h1>
        </header>
        <main>
          <aside id="left-side">
            <h3 className="aside-h3">Find Current Weather Conditions</h3>
            <input id="search" type="text" placeholder="Enter city..." />
            <form>
              <input
                type="radio"
                id="fahrenheit"
                name="degree"
                value="fahrenheit"
              />
              <label htmlFor="fahrenheit">Fahrenheit</label>{" "}
              <input type="radio" id="celcius" name="degree" value="celcius" />
              <label htmlFor="celcius">Celcius</label>
              <br />
              <input id="submit" type="submit" value="Submit" />
            </form>
          </aside>
          <aside id="right-side">
            <h3 className="aside-h3">Local Weather</h3>
          </aside>
        </main>
      </div>
    );
  }
}

export default App;
