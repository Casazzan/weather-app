import React from 'react'
import SearchBar from './Components/SearchBar'
import MainCard from './Components/MainCard'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            loading: false,
            weatherData: false,
        }
    }

    async fetchData(city) {
        this.setState({
            loading: true,
        })
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=1ba3cf989b72215565491bbe5ea27fa3');
            const allData = await response.json();
            const newWeatherData = {
                name: allData.name + ", " + allData.sys.country,
                temp: (allData.main.temp - 273.15).toFixed(1), //in C
                feelsLike: (allData.main.feels_like - 273.15).toFixed(1),
                iconDescription: allData.weather[0].main,
                description: allData.weather[0].description,
            }
            this.setState({
                loading: false,
                weatherData: newWeatherData
            })
        }
        catch (err) {
            this.setState({
                city,
            })
        }
    }

    getMainContent() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }
        else if (this.state.weatherData) {
            return <MainCard data={this.state.weatherData} />
        }
        else if (this.state.city) {
            return <div>{this.state.city} was not found</div>;
        }
        else {
            return null;
        }
    }

    render() {
        let mainContent = this.getMainContent();
        return (
            <div id="main">
                <SearchBar searchFunction={(city) => this.fetchData(city)} />
                {mainContent}
            </div>
        )
    }
}

export default App;