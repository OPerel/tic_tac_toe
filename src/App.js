import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Board from './components/Board/Board';
import Winner from './components/Winner/Winner';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      turn: 'X',
      score: {xScore: 0, oScore: 0},
      winner: null,
      cells: [
        '', '', '',
        '', '', '',
        '', '', ''
      ]
    };
  };

  onClickCell (i) {
    if (this.state.cells[i] === '') {
      this.changeCellValue(i);
      this.checkForWin();
      this.togglePlayer();
    };
  };

  changeCellValue (i) {
    const con = this.state.turn;
    let currentBoard = this.state.cells;
    currentBoard.splice(i, 1, con);
    this.setState({ cells: currentBoard })
  };

  checkForWin () {
    const cells = this.state.cells;
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
        this.updateScores()
        this.announceWinner();
        return;
      };
    });
  };

  checkTie () {
    if (this.state.winner === null && this.state.cells.every(cell => cell !== '')) {
      this.setState({ winner: 'tie'})
    };
  };

  togglePlayer () {
    this.setState(state => {
      return state.turn === 'X' ? state.turn = 'O' : state.turn = 'X';
    }, () => this.checkTie());
  };

  announceWinner () {
    this.setState({winner: this.state.turn});
  };

  updateScores () {
    const winner = this.state.turn;
    this.setState(state => winner === 'X' ? state.score.xScore += 1 : state.score.oScore += 1);
  };

  board = (reset) => {
    const { score } = this.state;
    this.setState(
      {
        turn: 'X',
        score: reset ? { xScore: 0, oScore: 0 } : score,
        winner: null,
        cells: [
          '', '', '',
          '', '', '',
          '', '', ''
        ]
      }
    );
    document.getElementById('b').classList.remove('hide');
    document.getElementById('w').classList.add('hide');
  };

  render () {
    const { cells } = this.state;
    return (
      <div className="App">
        <Header currentPlayer={this.state.turn} score={this.state.score} />
        <div className="board-container">
          <Board
            cells={cells}
            onClickCell={(i) => this.onClickCell(i)}
            winner={this.state.winner}
          />
          <Winner
            click={() => this.board(false)}
            winner={this.state.winner}
            buttonText="Play Again"
          />
        </div>
        <Button click={() => this.board(false)} text="Reset Board" />
        <Button click={() => this.board(true)} text="Reset Game!" />
      </div>
    )
  };
};

export default App;
