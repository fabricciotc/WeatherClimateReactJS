import React, {Component} from 'react';
import { tranformarNombreCompleto } from '../services/transformarNombreCompleto';
import ForecastItem from './ForecastItem';
import CircularProgress from '@material-ui/core/CircularProgress';

import './style.css';
import { api_forecast } from '../constantes/api_url';
import transformForescast from '../services/tranformForescast';

export class ForecastExtend extends Component{
    constructor(props){
        super(props)
        this.state={
            Data:null,
            city:this.props.city
        }
    }
    cargarDatos(){
    fetch(api_forecast(this.props.city)).
        then(rsp=>rsp.json()).then(data=>
            {
                const newWeather=transformForescast(data);
                this.setState({Data:newWeather});
            }
            ).catch(error=> alert(error));
    }
    componentDidMount(){
        this.cargarDatos();
    }

    contenido=(Data)=>{
       return( <div >
                {
                Data.map((item,index)=>
                  <div key={index}>  <ForecastItem weekDays={item.weekDay} Data={item.data} hour={item.hour}></ForecastItem></div>
                )
                }
        </div>);
    }
    componentDidUpdate(prevProps) {
        if(prevProps.city !== this.props.city) {
            this.setState({Data:null})
            this.cargarDatos();
        }
      }

    render(){
        const {city}= this.props
        const {Data}=this.state
        return(
            <div className="tituloPais">
                <h1 className="title" style={{textAlign:"center"}}>
                    Pronostico extendido para {tranformarNombreCompleto(city)}
                </h1>
             {  this.state.Data?
             this.contenido(Data):
             <div  style={{alignSelf:"center", textAlignLast:"center",margin:"20px"}}>  <CircularProgress /></div>}
            </div>

        );
    }
}