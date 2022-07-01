import React from 'react';

function GameBlock({ imageUrl, name, price, version, genres }) {
  const [activeVersion, setActiveVersion] = React.useState(version[0]);

  const versionNames = ['Physical', 'Digital'];

  return (
    <div className="game">
      <img className="game__img" src={imageUrl} alt="game"></img>
      <p className="game__title">{name}</p>
      <div className="game__info">
        <p className="game__text">Nintendo</p>
        <p className="game__text">{genres.join(', ')}</p>
      </div>

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

export default GameBlock;
