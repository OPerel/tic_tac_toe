import React from 'react';
import './Header.css';
import Scores from './Scores';

const Header = ({ currentPlayer, score }) => {
    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <div className="player-score">
                <h3><span>{currentPlayer}</span> Player</h3>
                <Scores xScore={score.xScore} yScore={score.yScore} />
            </div>
        </div>
    );
};

export default Header;
