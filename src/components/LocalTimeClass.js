import React, { Component } from 'react';

let timer;

class LocalTime extends Component {
  constructor() {
    super();
    this.state = {
      localTime: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    timer = setInterval(() => {
      this.setState({ localTime: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(timer);
  }

  render() {
    const { localTime } = this.state;
    return (
      <div>
        <strong>Local Time:</strong> {localTime}
      </div>
    );
  }
}

export default LocalTime;
