import React, {Component} from 'react';
import ToggleButton from './ToggleButton';

class Header extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (<div className='header'>
			<h1>CLOCK WORK</h1>
			<ToggleButton/>
			</div>)
	}
}
export default Header;