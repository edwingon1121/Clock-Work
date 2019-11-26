import React, { useState, useEffect } from 'react';
import { fetchCoord } from './HelperFunc';

//WEATHER.GOV API - Need to pass lat and lon 
//https://api.weather.gov/points/39.7456,-97.0892 

//TODO: Mapping between icons and short forecast, temperature, and day/night
const Weather = (props) => {

	const [success,setSuccess] = useState(false);
	const [details, setDetails] = useState({temperature: 0, desc: "Sunny", city:'Los Angeles'});

		async function retrieveWeather() {
			try{
				const coord = await fetchCoord();
				const forecast = await getWeather(coord);

				setSuccess(true)
				setDetails((prevState)=> { return {...prevState,temperature: forecast.temperature, desc: forecast.shortForecast,} })

			} catch (error){
				console.log(error);
			}
		}

		useEffect(() => { retrieveWeather(); },[])
 

	function getWeather(coord){
		console.log(coord);
		setDetails((prevState) => {return{...prevState, city: coord[2]}});
		const url = 'https://api.weather.gov/points/'+coord[0]+','+coord[1];

		return new Promise((resolve,reject) => {
			try {
				fetch(url)
				.then(resp => {
					// console.log(resp);
					return resp.json()})
				.then(resp => {
					fetch(resp.properties.forecastHourly)
					.then(resp => resp.json())
					.then(resp => resp.properties.periods[0])
					.then(data => { 
						console.log('DONE!');
						resolve(data)
					})
				})	
			} catch(error){
				reject(error);
			}
		})
	}

	
	if (success){
		return (
		<div>
			<img />
			<h3>City: {details.city}</h3>
			<h4>Temperature: <span>{details.temperature} &deg;F</span></h4>
			<h4>Description: <span>{details.desc}</span></h4>
		</div>
		)
	}

	return <h4>Retrieving weather...</h4>
}

export default Weather;