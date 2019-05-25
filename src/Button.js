import React from 'react';
import './Button.css';

export const TYPES = {
    PRIMARY: 'primary-btn',
    WIN: 'win-btn'
}

export const Button = ({ click, text, btnType }) => {
    return (
        <button
        type="button"
        onClick={click}
        className={btnType || TYPES.PRIMARY}
        >{text}</button>
    )
};

// export Button;
