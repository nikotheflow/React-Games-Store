import React from 'react';

function Game({ imageUrl, name, price, version }) {
  const [activeVersion, setActiveVersion] = React.useState(version[0]);

  const versionNames = ['Physical', 'Digital'];

  return (
    <div className="game">
      <img className="game__img" src={imageUrl} alt="game"></img>
      <span className="game__title">{name}</span>
      <ul className="game__options">
        {version.map((versionId, i) => (
          <li
            className={activeVersion === versionId ? 'game__option active' : 'game__option'}
            key={versionId}
            onClick={() => setActiveVersion(versionId)}>
            {versionNames[versionId]}
          </li>
        ))}
      </ul>
      <div className="game__buy-block">
        <button className="game__add-btn btn__primary btn">Add</button>
        <span className="game__price">${price}</span>
      </div>
    </div>
  );
}

export default Game;
