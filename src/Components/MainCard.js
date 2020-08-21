import React from 'react'

import WeatherGif from './WeatherGif'

function MainCard(props) {

    function capitalizeFirstLetter(str) {
        var splitStr = str.split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }

    return (
        <div id="weather-card">
            <div className="city">{props.data.name}</div>
            <div className="info-container">
                <div className="weather-info">
                    <WeatherGif iconDescription={props.data.iconDescription} />
                    <div className="description">{capitalizeFirstLetter(props.data.description)}</div>
                </div>
                <div className="temp-info">
                    <div className="temp">{props.data.temp} °C</div>
                    <div className="feels-like">Feels Like: {props.data.feelsLike} °C</div>
                </div>
            </div>
        </div>
    )
}

export default MainCard;