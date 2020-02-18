import React, { Component } from 'react';

class AnalogClock extends Component {
	constructor(props){
		super(props);
		const d = new Date();

		this.state = {
			hours: d.getHours(),
			minutes: d.getMinutes(),
			seconds: d.getSeconds()
		}
	}

	componentDidMount(){
		clearInterval(this.clockID);
		this.clockID = setInterval(() => this.tick(), 1000);
	}

	tick(){
		const d = new Date();
		this.setState({
			hours: d.getHours(),
			minutes: d.getMinutes(),
			seconds: d.getSeconds()
		})
	}

	// We get a number from (12am) 0 to 23 (11pm) 
	// 0 - 12 <- if 0 then 12 
	// 1 - 12 is an exact mathing 
	// 13-1, 14-2, 15-3, 16-4, 17-5, 18-6, 19-7, 20-8,
	// 21-9, 22-10, 23-11 

	getRegularHour(hour){
		if (hour === 0){
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

	render(){
		const { hours, minutes, seconds } = this.state
		const rHour = this.getRegularHour(hours)
		const hrAngle = this.getHourAngle(rHour, minutes)
		const minAngle = this.getMinuteAngle(minutes)
		const secAngle = this.getMinuteAngle(seconds)

		const hourStyle = {transform: 'translate(-50%,-50%) rotate('+ hrAngle +'deg)'}
		const minStyle = {transform : 'translate(-50%,-50%) rotate('+ minAngle +'deg)'}
		const secStyle = {transform : 'translate(-50%,-50%) rotate('+ secAngle +'deg)'}

		return (
			<div className="clock-trans clock">
				<div className="num-twelve">12</div>
				<div className="num-one">1</div>
				<div className="num-two">2</div>
				<div className="num-three">3</div>
				<div className="num-four">4</div>
				<div className="num-five">5</div>
				
				<div className="center"></div>
				<div style={hourStyle} className='hour'></div>
				<div style={minStyle} className="minute"></div>
				<div style={secStyle} className="second"></div>
				
				<div className="num-six">6</div>
				<div className="num-seven">7</div>
				<div className="num-eight">8</div>
				<div className="num-nine">9</div>
				<div className="num-ten">10</div>
				<div className="num-eleven">11</div>
			</div>
		)
	}
}

export default AnalogClock