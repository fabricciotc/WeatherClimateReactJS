import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
// eslint-disable-next-line
const location=(props)=>
{
    const {mostrarPanel,city}=props
    return(
    <div className="container">
    <a role="button" className="title" onClick={mostrarPanel}>{city}</a>
    </div>
);
}
location.propType={
    city:PropTypes.string.isRequired,
}

export default location;