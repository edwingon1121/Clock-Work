import React, {Component} from 'react';

import Input from './Input';
import Button from './Button';

class Form extends Component {
	constructor(props){
		super(props);

		this.state = { input: '' }

		//GET
		//POST
		//PUT
		//DELETE

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleReset = this.handleReset.bind(this);

	}

	handleChange(e){
		const val = e.target.value;
		console.log(`Previous value: ${this.state.input}`);

		this.setState(prevState =>{
			return {
				input: val,
			}
		},() => console.log(`New value: ${val}`))

	}

	handleClick(){
		//Handle Post request and once completed the user should get feedback
		alert(`The following was submitted: ${this.state.input}`);
	}
	handleReset(){
		this.setState(() => { return {input: ''} });
	} 

	render(){
		return (
			<div>
				<h2>Sanity Check</h2>
			<Input
				label={'How are you feeling?'}
				type={'text'}
				value={this.state.input}
				handleChange={this.handleChange}
				placeholder={'Let your mind run free!'}
			/>
			<Button 
				title={'Press me!'}
        onClick={this.handleClick}/>
        <Button
				title={'Erase me!'}
				onClick={this.handleReset}
			/>
			</div>
			

			)
	}
}

export default Form