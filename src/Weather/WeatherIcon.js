import React from 'react';
import '../css/weather-icons-wind.css';
import '../css/weather-icons-wind.min.css';
import '../css/weather-icons.css';
import '../css/weather-icons.min.css';

const iconStyle = {
	fontSize: "44px",
	color: "rgb(255, 118, 0)"
};

const WeatherIcon = (props) => {

	const description = props.description;
	const icon = getIcon(description.toLowerCase());
	console.log(icon);



	function isDaylight(){
		const date = new Date();
		return date.getHours() < 17
	}
	function getIcon(desc){
		console.log(desc);
		const daylight = isDaylight();
		let iconStr ='wi-'

		if (daylight){
			iconStr+="day-"
		}	else{
			iconStr+="night-"
		}

		if (desc.includes('clear')){
			if(daylight){
				iconStr+='sunny'
				return iconStr
			}
			iconStr+='clear'
			return iconStr
		} else if (desc.includes('sunny')){
				iconStr+='sunny'
				return iconStr
		}	else if (desc.includes('wind')){
			return 'wi-windy'
		} else if (desc.includes('rain')){
			iconStr+='rain'
			return iconStr
		} else if (desc.includes('shower')){
			iconStr+='showers'
				return iconStr
		}else if (desc.includes('snow')){
			iconStr+='snow'
				return iconStr
		} else if (desc.includes('thunder')){
			iconStr+='thunderstorm'
				return iconStr
		} else if (desc.includes('fog')){
			return 'wi-fog'
		} else {
			return 'wi-cloud'
		}


	}

	console.log(props.description);

	return(<i style= {iconStyle} className={`wi ${icon}`}></i>)

}

export default WeatherIcon;