import React from 'react';

const Button = (props) => <button className={`button ${props.buttonStyle}`}>{props.buttonText}</button>

export default Button;
