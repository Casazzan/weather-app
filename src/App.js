import React from "react";

import SearchBar from "./Components/SearchBar";
import MainCard from "./Components/MainCard";
import ToggleSwitch from "./Components/toggle-switch/ToggleSwitch";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isTempC: true,
      loading: false,
      weatherData: false,
    };
  }

  async fetchData(city) {
    this.setState({
      isTempC: this.state.isTempC,
      loading: true,
    });
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=1ba3cf989b72215565491bbe5ea27fa3"
      );
      const allData = await response.json();
      const newWeatherData = {
        name: allData.name + ", " + allData.sys.country,
        temp: (allData.main.temp - 273.15).toFixed(1), //in C
        feelsLike: (allData.main.feels_like - 273.15).toFixed(1),
        iconDescription: allData.weather[0].main,
        description: allData.weather[0].description,
      };
      this.setState({
        isTempC: this.state.isTempC,
        loading: false,
        weatherData: newWeatherData,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        isTempC: this.state.isTempC,
        city: city,
        loading: false,
        weatherData: null,
      });
    }
  }

  getMainContent() {
    if (this.state.loading) {
      return <div className="search-message">Loading...</div>;
    } else if (this.state.weatherData) {
      return (
        <MainCard data={this.state.weatherData} isTempC={this.state.isTempC} />
      );
    } else if (this.state.city) {
      console.log("his.state.city: ", this.state.city);
      return (
        <div className="search-message">
          Oops, '{this.state.city}' was not found
        </div>
      );
    } else {
      return null;
    }
  }

  toggleTemp() {
    const copy = this.state;
    console.log("copy: ", copy);
    copy.isTempC = !copy.isTempC;
    console.log(copy.isTempC);
    this.setState(copy);
  }

  render() {
    let mainContent = this.getMainContent();
    return (
      <div id="react-container">
        <ToggleSwitch
          optionOneString={"°C"}
          optionTwoString={"°F"}
          toggleFunction={() => this.toggleTemp()}
        />
        <div id="main">
          <SearchBar searchFunction={(city) => this.fetchData(city)} />
          {mainContent}
        </div>
      </div>
    );
  }
}

export default App;
