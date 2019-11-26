import React, {Component} from 'react'


// Each clock is going to have the same properties
// Time 
// className that is passed 
//Clock i
class Clock extends Component{
	constructor(props){
		super(props);
		this.state {
			date: new Date(),
		}
	}
	render(){
		return (
				<div>
					<h2>{this.state.date.toLocaleTimeString()}</h2>
				</div>
			)
	}
}

export default Clock;