import React from 'react';
import './Scores.css';

const Scores = ({ xScore, oScore }) => {
    return (
        <div className="scores">
            <span>X:</span> <span className="score">{xScore}</span>
            <span>O:</span> <span className="score">{oScore}</span>
        </div>
    );
};

export default Scores;
