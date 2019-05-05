import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Button from './Button';
import Board from './Board';
import Cell from './Cell';

class App extends Component {
    constructor () {
        super ();
        this.state = {
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
        };
    };

    togglePlayer = (i) => {
        if (this.state.cells[i].text === '') {
            this.setState(state => {
                return state.turn === 'X' ? state.turn = 'O' : state.turn = 'X';
            });
        }
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
    };

    onClickCell = (i) => {
        this.changeCellValue(i);
        this.togglePlayer(i);
    };

    // checkForWin = () => {
    //     const cells = this.state.cells;
    //     let row = cells.slice(0, 3);
    //     const equal = row.every(item => item.text === row[0].text && item.text !== '')
    //     console.log(equal, this.state.turn)
    // };

    resetBoard = () => {
        this.setState({
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
        });
    };

    componentDidMount () {
        // setInterval(this.checkForWin, 2000);
    }

    render () {
        return (
            <div className="App">
                <Header currentPlayer={this.state.turn} />
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
                <Button click={this.resetBoard} />
            </div>
        )
    };
};

export default App;
