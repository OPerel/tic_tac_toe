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

    togglePlayer = (i) => {
        this.setState(state => {
            return state.turn === 'X' ? state.turn = 'O' : state.turn = 'X';
        });
    };

    changeCellValue = (i) => {
        const cells = this.state.cells;
        const con = this.state.turn;

        let currentBoard = this.state.cells;
        currentBoard.splice(i, 1, con);
        this.setState({ cells: currentBoard })

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
            };
        });
        if (cells.every(cell => cell !== '')) {
            this.setState({ winner: 'Tie! No'})
        }
    };

    onClickCell = (i) => {
        if (this.state.cells[i] === '') {
            this.changeCellValue(i);
            this.togglePlayer(i);
        };
    };

    announceWinner = () => {
        this.setState(state => {
            return state.winner = state.turn;
        });
    };

    updateScores = () => {
        const winner = this.state.turn;
        if (winner === 'X') {
            this.setState(state => state.score.xScore += 1);
        } else {
            this.setState(state => state.score.oScore += 1);
        };
    };

    clearBoard = () => {
        this.setState(
            {
                turn: 'X',
                cells: [
                    '', '', '',
                    '', '', '',
                    '', '', ''
                ]
            }
        );
        document.getElementById('b').classList.remove('hide');
        document.getElementById('w').classList.add('hide');
        this.setState({ winner: null })
    };

    resetBoard = () => {
        this.setState(
            {
                turn: 'X',
                score: {xScore: 0, oScore: 0},
                cells: [
                    '', '', '',
                    '', '', '',
                    '', '', ''
                ]
            }
        );
        document.getElementById('b').classList.remove('hide');
        document.getElementById('w').classList.add('hide');
        this.setState({ winner: null })
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
                <Winner click={this.clearBoard} winner={this.state.winner} buttonText="Play Again" />
                <Button click={this.resetBoard} text="Reset Game!" />
            </div>
        )
    };
};

export default App;
