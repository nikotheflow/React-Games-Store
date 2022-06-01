import React from 'react';

//import gameImg from '../assets/img/mario.jpg';

function Game({ imageUrl, name, price }) {
  return (
    <div className="game">
      <img className="game__img" src="../assets/img/mario.jpg" alt="game"></img>
      <span className="game__title">{name}</span>
      <ul className="game__options">
        <li className="game__option game__option_active">New</li>
        <li className="game__option">Used</li>
      </ul>
      <div className="game__buy-block">
        <button className="game__add-btn btn__primary btn">Add</button>
        <span className="game__price">${price}</span>
      </div>
    </div>
  );
}

export default Game;
