import React from 'react';

const Button = (props) => {

	return(
		<button
			name={props.name}
			type={props.type}
			disabled={props.disabled}
			onClick={props.onClick}>
			{props.title} 
		</button>
		);
	
}

export default Button;