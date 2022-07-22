import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem, selectCartItem } from '../../redux/slices/cartSlice';

type GameBlockProps = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  version: number[];
  genres: string[];
};

const GameBlock: React.FC<GameBlockProps> = ({ id, imageUrl, title, price, version, genres }) => {
  const dispatch = useDispatch();
  const versionNames = ['Physical', 'Digital'];
  const [activeVersion, setActiveVersion] = React.useState(version[0]);

  const cartItem = useSelector(selectCartItem(id, versionNames, activeVersion));

  const itemCount = cartItem ? cartItem.count : 0;

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
          Add{' '}
          {itemCount > 0 &&
            (itemCount < 100 ? (
              <span className="game__add-btn-count">{itemCount}</span>
            ) : (
              <span className="game__add-btn-count">99</span>
            ))}
        </button>
        <span className="text__primary">${(+price).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default GameBlock;
