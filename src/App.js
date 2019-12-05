
import React, {Component} from 'react';
import './App.css';
import LocationList from './components/LocationList';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import { ForecastExtend } from './components/ForecastExtend';

const Paises=
[
    "Florida,us",
    "Lima,pe",
    "Sydney,au",
    "Buenos Aires,ar",
    "Bogota,co",
    "Madrid,es",
    "London,gb",
    "Mexico,mx"
]

class App extends Component {
  
  constructor(){
    super()
    this.state={
      city:null
    }
  }
  paisSelecionado=(city)=>{
      this.setState({city:city});
  }
  
  render(){
    const {city}=this.state
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography>
            WeatherApp
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="columns" style={{marginLeft:0, marginRight:0, marginTop:0}}> 
      <div className="column is-narrow locationList">
      <LocationList onSelectedLocation={this.paisSelecionado} Paises={Paises}/>
      </div>
      <div className="column forecastData">
      <Paper elevation={4}>
        {
          city?
        <ForecastExtend city={city}/>:
        null
        }
      </Paper>
      </div>
      </div>
      </div>
          );
  }
}

export default App;
