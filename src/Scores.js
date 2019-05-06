import React from 'react';
import './Scores.css';

const Scores = ({ xScore, yScore }) => {
    return (
        <div className="scores">
            <span>X:</span> <span className="score">{xScore}</span>
            <span>Y:</span> <span className="score">{yScore}</span>
        </div>
    );
};

export default Scores;
