import React from 'react';
import './Board.css';

const Board = (props) => {
    return (
        <div id="b" className='board'>   
            {props.children}
        </div>
    )
}

export default Board;
