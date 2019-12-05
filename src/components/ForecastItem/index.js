import React from 'react';
import WeatherData from '../WeatherLocation/WeatherData';
import {FaCalendarAlt} from 'react-icons/fa';
import {MdTimer} from 'react-icons/md';


const ForecastItem=({weekDays,hour,Data})=>{
    return(
        <div>
            <div style={{marginBottom:"20px", marginTop:"20px"}}>
             <p className="subtitle is-6">
            <FaCalendarAlt style={{marginRight:"6px"}}></FaCalendarAlt>
             {weekDays} 
                 <span className="subtitle is-6" style={{float:"right"}}>
                 <MdTimer/>
                 Hora: {hour}hrs
                 </span>
             </p>
            </div>
            <div>
                      <WeatherData data={Data}/>
            </div>
        </div>
    );
}

export default ForecastItem;