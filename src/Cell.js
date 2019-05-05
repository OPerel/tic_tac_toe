import React from 'react';
import './Cell.css';

const Cell = ({ id, cellContent, onClicking }) => {
    return (
        <div 
        className='cell'
        onClick={(e) => onClicking(id)}
        >
            <p>{cellContent}</p>
        </div>
    )
}

export default Cell;