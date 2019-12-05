//Un metodo para crear componentes tambien (Es un componente funcional, el mas sencillo para realizarse)

import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import Location from './location';
import WeatherData from './WeatherData';
import './style.css';
import transformWeather from '../../services/transformWeather';
import {api_weather} from '../../constantes/api_url';
import { tranformarNombreCompleto } from '../../services/transformarNombreCompleto';


export default class WeatherLocation extends Component{
//AQUI SE CONSTRUYE NUESTRO COMPONENTE
    constructor(props){ //PASANDO PROPIEDADES
        super(props); //Usar este siempre
        const {city}=props; //DESTRUTCTURO PROPS
        this.state={
            city:city,
            data: null
        };
    }

    componentDidMount(){
            this.loadData();
        }

    componentDidUpdate(prevProps,prevStates){
    }

    loadData=()=>{
    fetch(api_weather(this.state.city)).then(rsp=>
        rsp.json()).then(data=> {
            const newWeather= transformWeather(data);
            this.setState({data: newWeather});
        })
    .catch(error=> console.error(error));
    }

    // handleUpdateClick=(msg)=>{
    //     this.setState({city:"Barcelona, España"});
    //     Data.weatherState="rain";
    //     console.log(msg);
    // }
    // handleUpdateClickNoParametre=()=>{
    //     this.setState({city:"Madrid, España"});
    //     Data.weatherState="sun";
    //     console.log("Actualizado");
    // }

    render()
    { 
        const {city,data} = this.state
        const {weatherLocationClick}=this.props
        
        return(  
        <div className="containerWD" >
        <li>
        <div className="titlePadding">
        <Location mostrarPanel={weatherLocationClick} city={tranformarNombreCompleto(city)}></Location>
        </div>
        </li>
        <div className="wData">
         { data?  <WeatherData data={data} ></WeatherData> : <CircularProgress size={80}></CircularProgress> }
        </div>
        {/* Uso de Arro Function con Parametros en OnClik */}
        {/* <button onClick={()=>this.handleUpdateClick("Actualizado")} >Actualizar con Parametros</button>
        <button onClick={this.handleUpdateClickNoParametre} >Actulizado Sin Parametros</button> */}
        

        </div>
        );
    }

}

