//Angles of an analog clock depend on the following
// angleHr = 0.5deg x (60 x hr + min)
// angleMin = 6deg x M
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

	getHourAngle(){
		// We get a number from (12am) 0 to 23 (11pm) 
		// Need to account for difference
		// 0 - 12 <- if 0 then 12 
		// 1 - 12 
		// 13-1, 14-2, 15-3, 16-4, 17-5, 18-6, 19-7, 20-8,
		// 21-9, 22-10, 23-11



		const  
	}
}