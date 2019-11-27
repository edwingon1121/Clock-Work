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
			date: new Date()
		}
	}
	componentDidMount(){
		this.timerID = setInterval(() => this.tick(),1000);
	}

	componentWillMount(){
		clearInterval(this.timerID);
	}

	tick(){
		this.setState( { time:new Date() } );
	}

	render(){

		return (
				<div>
					<h2 className='digital-clock'>{`${this.state.date.toLocaleTimeString()}`}</h2>
				</div>
			)
	}
}

export default Clock;