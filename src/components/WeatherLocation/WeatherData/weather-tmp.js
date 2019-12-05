import React from 'react';
import {WiCloudy} from 'react-icons/wi';
import {WiDaySunny} from 'react-icons/wi';
import {WiDayRain} from 'react-icons/wi';
import {WiDaySnow} from 'react-icons/wi';
import {WiThunderstorm} from 'react-icons/wi';
import {WiNightShowers} from 'react-icons/wi';
import { IconContext } from "react-icons";
import PropTypes from 'prop-types';
import './style.css';

const icons={
    cloudy:<WiCloudy></WiCloudy>,
    sun: <WiDaySunny></WiDaySunny>,
    rain: <WiDayRain></WiDayRain>,
    snow: <WiDaySnow/>,
    thunder: <WiThunderstorm/>,
    drizzle:<WiNightShowers/>
}
const getIconWeather=( stateIcon )=>{
    const icon=icons[stateIcon];
    if(icon){
        return icon
    }
    else{
        console.error("Dato no existente de temperatura", icons)
        return <WiDaySnow></WiDaySnow> 
    }
}

const WeatherTemperature=({temperature,weatherState})=>(
    <div className="weatherTmp" style={{display: "inline-flex"}}>
        <div>
        <IconContext.Provider value={{ color: "orange", className: "global-class-name", size:"4em" }}>
        {getIconWeather(weatherState)}
        </IconContext.Provider>
        </div>
        <div style={{fontSize:"x-large", alignSelf:"center"}}>
        <p >{`${temperature}C°`}</p>

        </div>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.string.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;