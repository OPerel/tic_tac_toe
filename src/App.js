import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Button from './Button';
import Board from './Board';
import Cell from './Cell';
import Winner from './Winner';

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
            // this.checkTie();
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

    // checkTie () {
    //     // Not working for a win in the last move.
    //     if (this.state.winner === null && this.state.cells.every(cell => cell !== '')) {
    //         this.setState({ winner: 'Tie! No'})
    //     };
    // };

    togglePlayer () {
        this.setState(state => {
            return state.turn === 'X' ? state.turn = 'O' : state.turn = 'X';
        });
    };

    announceWinner () {
        this.setState({winner: this.state.turn});
    };

    updateScores () {
        const winner = this.state.turn;
        this.setState(state => winner === 'X' ? state.score.xScore += 1 : state.score.oScore += 1);
    };

    clearBoard () {
        this.setState(
            {
                turn: 'X',
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

    resetBoard () {
        this.setState(
            {
                turn: 'X',
                score: {xScore: 0, oScore: 0},
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
        const cells = this.state.cells;
        return (
            <div className="App">
                <Header currentPlayer={this.state.turn} score={this.state.score} />
                <Board winner={this.state.winner}>
                    {
                        cells.map((cell, i) => {
                            return (
                                <Cell
                                key={i}
                                num={i}
                                cellContent={cell}
                                onClicking={() => this.onClickCell(i)}
                                />
                            );
                        })
                    }
                </Board>
                <Winner click={this.clearBoard.bind(this)} winner={this.state.winner} buttonText="Play Again" />
                <Button click={this.clearBoard.bind(this)} text="Reset Board" />
                <Button click={this.resetBoard.bind(this)} text="Reset Game!" />
            </div>
        )
    };
};

export default App;
