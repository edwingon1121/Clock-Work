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
			acceptLocation: false, 
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
		})
		
	}

	handleDecline(e){
		console.log('Decline has been selected!')
		const val = e.target.name;
		this.setState( () => {
			localStorage.setItem('weather', val);
			return {
				acceptLocation: false,
			}
		})

	}

	render(){
		const body = this.state.acceptLocation;

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