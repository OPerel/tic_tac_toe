import React from 'react';
import './Header.css';
import Scores from './Scores/Scores';

const Header = ({ currentPlayer, score }) => (
  <div>
    <h1>Tic Tac Toe</h1>
    <div className="player-score">
      <h3><span>{currentPlayer}</span> Player</h3>
      <Scores xScore={score.xScore} oScore={score.oScore} />
    </div>
  </div>
);

export default Header;
