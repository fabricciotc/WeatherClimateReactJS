import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

const LocationList=({Paises, onSelectedLocation})=>{
const handlWeatherLocationClick=(pais)=>{
 onSelectedLocation(pais);
}
    return(
        <ul className="menu">
            {
        Paises.map(pais=>
            <WeatherLocation key={pais}
            city={pais} 
            weatherLocationClick={()=>handlWeatherLocationClick(pais)}/>
            )}
            </ul>
    );
}

LocationList.propTypes={
    Paises:PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired
}

export default LocationList;