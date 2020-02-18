import React, {Component} from 'react'
import './clock.css'
// Each clock is going to have the same properties
// Time 
// className that is passed 
//Clock i
class Clock extends Component{
	constructor(props){
		super(props);
		this.state = {
			time: new Date()
		}
	}
	componentDidMount(){
		this.timerID = setInterval(() => this.tick(),1000);
	}

	componentWillMount(){
		clearInterval(this.timerID);
	}

	tick(){
		this.setState({ 
			time: new Date() 
		});
	}

	render(){
		/*HH:MM:SS AM/PM  -> digital clock*/ 
		/*HH:MM PM/AM -> digital square*/
		/*DW MM DD HH:MM AM/PM -> digital round*/

		//Removing commas and colons in the string
		// console.log("render called ")
		const a = this.state.time;
		const options = { hour: 'numeric', minute: 'numeric', weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
		// 'en-US',{ hour: 'numeric', minute: 'numeric', second: 'numeric'}


		a.toLocaleDateString('en', options)

		return (
				<div className={`clock-trans ${this.props.className}`}>
					<h2>{`${a.toLocaleDateString('en', options)}`}</h2>
				</div>
			)
	}
}

export default Clock;