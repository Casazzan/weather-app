import React from 'react'
import ReactDom from 'react-dom'

import App from './App'

import RainIcon from './gifs/Rain.svg'

//list of possible descriptions: Rain, Thunderstorm, Drizzle, Snow, Clouds, Clear/Else case
const gifURLS = {
};

ReactDom.render(<img src={RainIcon} />, document.getElementById('root'));