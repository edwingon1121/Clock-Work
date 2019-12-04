import React, {Component} from 'react';
import '../css/toggleButton.css';

const ToggleButton = () => {

	return (
		<div>
			<label className="switch">
  			<input type="checkbox"/>
  			<span className="slider round"></span>
  			<i className='wi wi-moon-waning-crescent-3 dark'></i>
  			<i className='wi wi-day-sunny light'></i>
			</label>
		</div>
		)
}

export default ToggleButton;