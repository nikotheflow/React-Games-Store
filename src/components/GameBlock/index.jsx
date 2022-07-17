import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../redux/slices/cartSlice';

function GameBlock({ id, imageUrl, title, price, version, genres }) {
  const dispatch = useDispatch();
  const [activeVersion, setActiveVersion] = React.useState(version[0]);

  const versionNames = ['Physical', 'Digital'];

  const onClickAdd = () => {
    const item = {
      id,
      imageUrl,
      title,
      price,
      version: versionNames[activeVersion],
    };

    dispatch(addItem(item));
  };

  return (
    <div className="game">
      <img className="game__img" src={imageUrl} alt="game"></img>
      <h3 className="game__title">{title}</h3>
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
        <button className="game__add-btn btn_contained btn" onClick={onClickAdd}>
          Add
        </button>
        <span className="text__primary">${price}</span>
      </div>
    </div>
  );
}

export default GameBlock;
