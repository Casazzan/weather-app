import React from 'react'

import RainIcon from './Rain.svg'
import ThunderstormIcon from './Thunderstorm.svg'
import CloudsIcon from './Clouds.svg'
import SnowIcon from './Snow.svg'
import DrizzleIcon from './Drizzle.svg'
import ClearIcon from './Clear.svg'

//list of possible descriptions: Rain, Thunderstorm, Drizzle, Snow, Clouds, Clear/Else case
const gifs = {
    Rain: <img src={RainIcon} alt="" />,
    Thunderstorm: <img src={ThunderstormIcon} alt="" />,
    Clouds: <img src={CloudsIcon} alt="" />,
    Snow: <img src={SnowIcon} alt="" />,
    Drizzle: <img src={DrizzleIcon} alt="" />,
    Clear: <img src={ClearIcon} alt="" />
};

export default gifs