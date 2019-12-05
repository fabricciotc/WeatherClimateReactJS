
const API_KEY="1d6d2f21ec37d03553cd634e4d266a53";
const API="http://api.openweathermap.org/data/2.5/weather";
const API2="http://api.openweathermap.org/data/2.5/forecast";

export const api_weather=(location)=>(`${API}?q=${location}&appid=${API_KEY}`);
 export const api_forecast=(location)=>(`${API2}?q=${location}&appid=${API_KEY}`);