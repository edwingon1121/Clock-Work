import React, {Component} from 'react';
import Button from '../Form/Button';
import Weather from './Weather'
import {getLSTerm} from './HelperFunc';

//Makes functional call to set up weather 
//First askes user if they would like to allow location to be used

class WeatherControl extends Component {
	constructor(props){
		super(props);
		const val = getLSTerm('weather');

		this.state = {
			acceptLocation: val === 'accept'? true : false, 
		}
		
		this.handleAccept = this.handleAccept.bind(this);
		this.handleDecline = this.handleDecline.bind(this);
	}


	handleAccept(e){
		console.log('Accept has been pressed!')
		const val = e.target.name;
		console.log(val);
		this.setState( () => {
			localStorage.setItem('weather', val);
			return {
				acceptLocation: true,
			}
		}, console.log(this.state.acceptLocation))
		
	}

	handleDecline(e){
		console.log('Decline has been selected!')
		const val = e.target.name;
		this.setState(() => {
			localStorage.setItem('weather', val);
			return {
				acceptLocation: false,
			}
		},console.log(this.state.acceptLocation))

	}

	render(){
		const body = this.state.acceptLocation;
		// Either Sucess shows weather, Decline - response that says understood and askes again

		return (
			<div className='weather-content'>
				<h2>Weather</h2>
				<p>Would like to allow location services so we can provide accurate weather?</p>

				{body ?(
					<Weather/>
				) : (
					<div>
						<Button
							type={'submit'}
							name={'accept'}
							title={'Accept'}
							onClick={this.handleAccept}/>
						<Button
							type={'submit'}
							name={'decline'}
							title={'Decline'}
							onClick={this.handleDecline} />
						</div>
				)}
			</div>
			);
	}
	
}
export default WeatherControl;