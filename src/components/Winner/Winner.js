import React from 'react';
import './Winner.css';
import Button, { TYPES } from '../Button/Button';

const Winner = ({ winner, click, buttonText }) => (
  <div id="w" className={winner ? "winner win" : "winner"}>
    <h2>
      <span>
        {winner !== 'tie' ? winner : ''}
      </span>
      {winner !== 'tie' ? ' Player wins!' : 'Tie! No player wins.'}
    </h2>
    <Button click={click} text={buttonText} btnType={TYPES.WIN} />
  </div>
);

export default Winner;
