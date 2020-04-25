import React from 'react';
import './Cell.css';

const Cell = ({ num, cellContent, onClicking }) => (
  <div
    className='cell'
    onClick={() => onClicking(num)}
  >
    <p>{cellContent}</p>
  </div>
);

export default Cell;
