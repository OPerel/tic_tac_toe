import React from 'react';
import './Board.css';

import Cell from './Cell/Cell';

const Board = (props) => (
  <div id="b" className={props.winner ? "win-b board" : "board"}>
    {
      props.cells.map((cell, i) => {
        return (
          <Cell
          key={i}
          num={i}
          cellContent={cell}
          onClicking={() => props.onClickCell(i)}
          />
        );
      })
    }
  </div>
);

export default Board;
