import React from 'react';

function GameBlock({ imageUrl, name, price, version, genres }) {
  const [activeVersion, setActiveVersion] = React.useState(version[0]);

  const versionNames = ['Physical', 'Digital'];

  return (
    <div className="game">
      <img className="game__img" src={imageUrl} alt="game"></img>
      <h3 className="game__title">{name}</h3>
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
        <button className="game__add-btn btn_contained btn">Add</button>
        <span className="text__primary">${price}</span>
      </div>
    </div>
  );
}

export default GameBlock;
