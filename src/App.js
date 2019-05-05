import React, { Component } from 'react';
import './App.css';
import Board from './Board';
import Cell from './Cell';

class App extends Component {
    constructor () {
        super ();
        this.state = {
            turn: 'X Player',
            cells: [ 
                {name: 'cell1', text: ''},
                {name: 'cell2', text: ''},
                {name: 'cell3', text: ''},
                {name: 'cell4', text: ''},
                {name: 'cell5', text: ''},
                {name: 'cell6', text: ''},
                {name: 'cell7', text: ''},
                {name: 'cell8', text: ''},
                {name: 'cell9', text: ''},
            ]
        };
    };

    togglePlayer = (i) => {
        if (this.state.cells[i].text === '') {
            this.setState(state => {
                return state.turn === 'X Player' ? state.turn = 'O Player' : state.turn = 'X Player';
            });
        }
    };

    getCellValue = (i) => {
        const currentPlayer = this.state.turn;
        const cellText = this.state.cells[i].text;
        let val = '';
        if (cellText === '') {
            val = currentPlayer === 'X Player' ? 'X' : 'O';
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
    }

    resetBoard = () => {
        this.setState({
            turn: 'X Player',
            cells: [ 
                {name: 'cell1', text: ''},
                {name: 'cell2', text: ''},
                {name: 'cell3', text: ''},
                {name: 'cell4', text: ''},
                {name: 'cell5', text: ''},
                {name: 'cell6', text: ''},
                {name: 'cell7', text: ''},
                {name: 'cell8', text: ''},
                {name: 'cell9', text: ''},
            ]
        });
    };

    componentDidMount () {
        
    }

    render () {
        return (
            <div className="App">
                <h1>Tic Tac Toe</h1>
                <h3>{this.state.turn}</h3>
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
                <button 
                type='button' 
                onClick={this.resetBoard}
                >
                    Reset Game!
                </button>
            </div>
        )
    };
};

export default App;
