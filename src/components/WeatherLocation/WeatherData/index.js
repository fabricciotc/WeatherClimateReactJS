import React from 'react';
import WeatherExtraInfo from './weather-extrainfo';
import WeatherTemperature from './weather-tmp';
import PropTypes from 'prop-types';

const WeatherData=({data})=>
{  
    const {temperature,weatherState,humidity,wind}=data
    return(<div className="columns weatherData">
        <div className="column" style={{display:"inline-block"}}>
       <WeatherTemperature  temperature={temperature} weatherState={weatherState}></WeatherTemperature>
        </div>
        <div className="column weatherExtra"style={{display:"inline-block", verticalAlign:"text-bottom"}}>
       <WeatherExtraInfo  humidity={humidity} wind={wind}></WeatherExtraInfo>
        </div>
    </div>);
}

WeatherData.propTypes={
    data:PropTypes.shape(
       { temperature: PropTypes.string.isRequired,
        weatherState:PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.number.isRequired}
    )
}

export default WeatherData;