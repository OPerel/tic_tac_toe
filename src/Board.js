import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
    render () {
        return (
            <div id="b" className='board'>
                {this.props.children}
            </div>
        );
    };
};

export default Board;
