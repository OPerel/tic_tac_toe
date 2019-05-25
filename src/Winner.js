import React from 'react';
import './Winner.css';
import Button from './Button';

const Winner = ({ winner, click, buttonText }) => {
    return (
        <div id="w" className={winner ? "winner win" : "winner"}>
            <h2><span>{winner}</span> Player Wins!</h2>
            <Button click={click} text={buttonText} />
        </div>
    );
};

export default Winner;
