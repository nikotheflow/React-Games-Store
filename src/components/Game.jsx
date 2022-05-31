import React from 'react';

import gameImg from '../assets/img/mario.jpg';

function Game({ title, price }) {
  return (
    <div className="game">
      <img className="game__img" src={gameImg} alt="game"></img>
      <span className="game__title">{title}</span>
      <div className="game__options">
        <span className="game__option">New</span>
        <span className="game__option">Used</span>
      </div>
      <span className="game__price">${price}</span>
      <button className="game__add-btn btn">Add</button>
    </div>
  );
}

export default Game;
