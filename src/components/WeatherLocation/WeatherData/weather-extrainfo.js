 import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const WeatherExtraInfo=({humidity,wind})=>(
    <div className="weatherExtra" style={{float:"right"}}>
        {`Humedad: ${humidity}%`}
        <br/>
        {`Viento: ${wind} m/s `}
    </div>
);

WeatherExtraInfo.propTypes={
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
}

export default WeatherExtraInfo;