import React, {useState} from 'react';
import {fetchCoord} from './HelperFunc';

//WEATHER.GOV API - Need to pass lat and lon 
//https://api.weather.gov/points/39.7456,-97.0892 

//TODO: Mapping between icons and short forecast, temperature, and day/night
const Weather = (props) => {

	const [success,setSuccess] = useState(false);

	const weather = (async () => {
	const coord = await fetchCoord();
	console.log(coord);
	// const details = await getWeather(coord); 
	})();


	// fetchCoord.then(coord => {
	// 	console.log(coord);
	// 	getWeather(coord)}); 

	function getWeather(coord){
		console.log(coord);
		const url = 'https://api.weather.gov/points/'+coord[0]+','+coord[1];
	 fetch(url)
	 .then(resp => resp.json())
	 .then(resp => {
			try{
				const weatherStats = {city: '', temperature: '', forecast:''};
				weatherStats.city = resp.properties.relativeLocation.properties.city;

				fetch(resp.properties.forecastHourly).then(resp => resp.json())
				.then(data => {
						weatherStats.temperature = resp.properties.periods[0].temperature;
						weatherStats.forecast = resp.properties.period[0].shortForecast;

						setSuccess(true);
				})
			}catch(error){
				return error;
			}
		}) 
	}

	
	if (success){
		return (
		<div>
			<img />
			<h3>City: {'Redondo beach'}</h3>
			<h4>Temperature: <span>76 &deg;F</span></h4>
		</div>
		)
	}

	return <h4>Having issues retrieving weather.</h4>
}

export default Weather;