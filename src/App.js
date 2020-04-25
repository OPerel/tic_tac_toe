import React, { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Board from './components/Board/Board';
import Winner from './components/Winner/Winner';

const App = () => {

  const [ turn, setTurn ] = useState('X');
  const [ score, setScore ] = useState({ xScore: 0, oScore: 0 });
  const [ winner, setWinner ] = useState(null);
  const [ cells, setCells ] = useState([
    '', '', '',
    '', '', '',
    '', '', ''
  ]);

  const onClickCell = (i) => {
    if (cells[i] === '') {
      changeCellValue(i);
      checkForWin();
      togglePlayer();
    };
  };

  const togglePlayer = () => {
    const nextTurn = turn === 'X' ? 'O' : 'X';
    setTurn(nextTurn);
    checkTie();
  };

  const changeCellValue = (i) => {
    cells.splice(i, 1, turn);
    setCells(cells)
  };

  const checkForWin = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    lines.forEach(line => {
      let [a, b, c] = line;
      if (cells[a] === cells[b] && cells[a] === cells[c] && cells[a] !== "") {
        announceWinner();
        return;
      };
    });
  };

  const checkTie = () => {
    if (winner === null && cells.every(cell => cell !== '')) {
      setWinner('tie')
    };
  };

  const announceWinner = () => {
    let { xScore, oScore } = score;
    const newScore = {
      xScore: turn === 'X' ? xScore =+ 1 : xScore,
      oScore: turn === 'O' ? oScore =+ 1 : oScore 
    }
    setScore(newScore);
    setWinner(turn);
  };

  const board = (reset) => {
    setTurn('X');
    setScore(prevScore => reset ? { xScore: 0, oScore: 0 } : prevScore);
    setWinner(null);
    setCells([
      '', '', '',
      '', '', '',
      '', '', ''
    ]);
    document.getElementById('b').classList.remove('hide');
    document.getElementById('w').classList.add('hide');
  };

  return (
    <div className="App">
      <Header currentPlayer={turn} score={score} />
      <div className="board-container">
        <Board
          cells={cells}
          onClickCell={(i) => onClickCell(i)}
          winner={winner}
        />
        <Winner
          click={() => board(false)}
          winner={winner}
          buttonText="Play Again"
        />
      </div>
      <Button click={() => board(false)} text="Reset Board" />
      <Button click={() => board(true)} text="Reset Game!" />
    </div>
  )
};

export default App;
