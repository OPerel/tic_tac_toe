import React from 'react';
import './Cell.css';

const Cell = ({ num, cellContent, onClicking }) => {
    return (
        <div
        className='cell'
        onClick={() => onClicking(num)}
        >
            <p>{cellContent}</p>
        </div>
    )
}

export default Cell;
