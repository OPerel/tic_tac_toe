import React from 'react';
import './Button.css';

const Button = ({ click, text }) => {
    return <button type="button" onClick={click}>{text}</button>
};

export default Button;
