import React from 'react';
import './Header.css';
import Scores from './Scores';

const Header = ({ currentPlayer, score }) => {
    console.log(score);
    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <h3><span>{currentPlayer}</span> Player</h3>
            <Scores xScore={score.xScore} yScore={score.yScore} />
        </div>
    )
};

export default Header;
