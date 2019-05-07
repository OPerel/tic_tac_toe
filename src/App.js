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
            cells: [
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''},
                {text: ''},
            ]
        };
    };

    togglePlayer = (i) => {
        if (this.state.cells[i].text === '') {
            this.setState(state => {
                return state.turn === 'X' ? state.turn = 'O' : state.turn = 'X';
            });
        };
    };

    getCellValue = (i) => {
        const currentPlayer = this.state.turn;
        const cellText = this.state.cells[i].text;
        let val = '';
        if (cellText === '') {
            val = currentPlayer === 'X' ? 'X' : 'O';
        } else {
            val = cellText;
        }
        return val;
    }

    changeCellValue = (i) => {
        const con = this.getCellValue(i);
        this.setState(state => {
            let cell = state.cells.map((cell, j) => {
                return i === j ? cell.text = con : cell.text;
            });
            return cell;
        });
        // this.checkForWin();
    };

    onClickCell = (i) => {
        this.changeCellValue(i);
        this.togglePlayer(i);
    };

    // WHERE TO CALL checkForWin ???
    checkForWin = () => {
        const cells = this.state.cells;
        // console.log(cells);
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
            // console.log(a, cells[a].text, b, cells[b].text, c, cells[c].text);
            if (cells[a].text === cells[b].text && cells[a].text === cells[c].text && cells[a].text !== "") {
                console.log('win');
                this.announceWinner();
            };
        });
    };

    announceWinner = () => {
        const announce = document.getElementById('w');
        const board = document.getElementById('b');
        this.updateScores();
        board.classList.add('hide');
        announce.classList.remove('hide');
    }

    updateScores = () => {
        const winner = this.state.turn === 'X' ? 'O' : 'X';
        if (winner === 'X') {
            this.setState(state => state.score.xScore++);
        } else {
            this.setState(state => state.score.oScore++);
        }
    }

    clearBoard = () => {
        this.setState(
            {
                turn: 'X',
                cells: [
                    {text: ''},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                ]
            }
        );
        document.getElementById('b').classList.remove('hide');
        document.getElementById('w').classList.add('hide');
    };

    resetBoard = () => {
        this.setState(
            {
                turn: 'X',
                score: {xScore: 0, oScore: 0},
                cells: [
                    {text: ''},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                ]
            }
        );
        document.getElementById('b').classList.remove('hide');
        document.getElementById('w').classList.add('hide');
    };

    render () {
        const winner = this.state.turn === 'X' ? 'O' : 'X';
        return (
            <div className="App">
                <Header currentPlayer={this.state.turn} score={this.state.score} />
                <Board>
                    {
                        this.state.cells.map((cell, i) => {
                            return (
                                <Cell
                                key={i}
                                id={i}
                                cellContent={cell.text}
                                onClicking={() => this.onClickCell(i)}
                                />
                            );
                        })
                    }
                </Board>
                <Winner click={this.clearBoard} winner={winner} buttonText="Play Again" />
                <Button click={this.resetBoard} text="Reset Game!" />
            </div>
        )
    };
};

export default App;
