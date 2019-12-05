import { getName } from 'country-list';

export const tranformarNombreCompleto=(city)=>{
var start=String(city).length-2
var fullnameCity=getName(String(city).substring(start,start+2).toUpperCase())
const fullname=`${city.substring(0,start)} ${fullnameCity}`
return fullname
}