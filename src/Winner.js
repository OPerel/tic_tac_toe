import React from 'react';
import './Winner.css';
import Button from './Button';

const Winner = ({ winner, click, buttonText }) => {
    return (
        <div id="w" className={winner ? "winner win" : "winner"}>
            <h2>
                <span>{winner !== 'tie' ? winner : ''}</span>
                {winner === 'X' || winner === 'Y' ? ' Player wins!' : 'Tie! No player wins.'}
            </h2>
            <Button click={click} text={buttonText} />
        </div>
    );
};

export default Winner;
