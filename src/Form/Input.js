import React from 'react';

const Input = (props) => {
	return (
		<div>
			<label>
				{props.label}
			</label>
			<br/>
			<input 
				type={props.type}
				value={props.value}
				onChange={props.handleChange}
				placeholder={props.placeholder}
			/>
		</div>
		);
}
export default Input;