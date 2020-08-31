import React from "react";
import gifs from "../gifs/gifExport";

function WeatherGif(props) {
  if (gifs[props.iconDescription]) {
    return <div id="gif">{gifs[props.iconDescription]}</div>;
  } else {
    return <div id="gif">{gifs["Clear"]}</div>;
  }
}

export default WeatherGif;
