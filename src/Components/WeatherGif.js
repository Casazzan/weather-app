import React from 'react'
import gifs from '../gifs/gifExport'

function WeatherGif(props) {
    return (
        <div id="gif">
            {gifs[props.iconDescription]}
        </div>
    );
}

export default WeatherGif;