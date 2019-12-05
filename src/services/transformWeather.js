import convert from 'convert-units';

    const getTemp=(unit,weatherTemp)=>{
        return Number(convert(weatherTemp).from("K").to(unit)).toFixed(1);
    }

    const getWeatherState=weather_data=>{
        const {id}=weather_data;
        if(id<300){
            return "thunder";
        }else if( id<400){
            return "drizzle";
        }else if(id<600){
            return "rain";
        }else if(id<700){
            return "snow";
        }else if(id===800){
            return "sun";
        }
        else{
            return "cloudy";
        }
    }

    const transformWeather = weather_data =>{
    const{humidity,temp}=weather_data.main;
    const{speed}= weather_data.wind;
    const weatherState= getWeatherState(weather_data.weather[0]);
    const data_weather={
        temperature: getTemp("C",temp),
        humidity:humidity, //ESTO
        wind:speed,
        weatherState //ES IGUAL A ESTO (PONER SOLO EL NOMBRE PORQE ES IGUAL)
    }
    return data_weather;
    }

    export default transformWeather;
