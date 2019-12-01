import React, { Component } from 'react';

class AnalogClock extends Component {
	constructor(props){
		super(props);
		
		const d = new Date();

		this.state = {
			hours: d.getHours(),
			minutes: d.getMinutes()
		}
	}

	// We get a number from (12am) 0 to 23 (11pm) 
	// 0 - 12 <- if 0 then 12 
	// 1 - 12 is an exact mathing 
	// 13-1, 14-2, 15-3, 16-4, 17-5, 18-6, 19-7, 20-8,
	// 21-9, 22-10, 23-11 

	getRegularTime(hour){
		if (hour == 0){
			return 12
		}else if(hour > 12){
			return hour - 12
		} else {
			return hour
		}
	}

	//Angles of an analog clock depend on the following

	// angleHr = 0.5 deg x (60 x hr + min)
	getHourAngle(hour,min){
		//Each hour has space of 30deg difference
		const angle = 0.5*(60* hour + min);

		return angle
	}

	// angleMin = 6 deg x M
	getMinuteAngle(min){
		//Each minute has 6deg difference
		const angle = 6 * min;

		return angle
	}
}