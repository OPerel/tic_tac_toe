import React from 'react';
import './Button.css';

const Button = ({ click }) => {
    return (
        <button type="button" onClick={click}>Reset Game!</button>
    );
};

export default Button;
