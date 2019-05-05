import React from 'react';
import './Header.css';

const Header = ({ currentPlayer }) => {
    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <h3><span>{currentPlayer}</span> Player</h3>
        </div>
    )
};

export default Header;
