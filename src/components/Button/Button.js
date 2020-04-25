import React from 'react';
import './Button.css';

export const TYPES = {
    PRIMARY: 'primary-btn',
    WIN: 'win-btn'
}

const Button = ({ click, text, btnType }) => (
  <button
    type="button"
    onClick={click}
    className={btnType || TYPES.PRIMARY}
  >
    {text}
  </button>
);

export default Button;

