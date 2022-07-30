import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCartItem } from '../../redux/cart/selectors';
import { addItem } from '../../redux/cart/slice';
import { TCartItem } from '../../redux/cart/types';
import { TGame } from '../../redux/games/types';

export const versionNames = ['Physical', 'Digital'];

export const GameBlock: React.FC<TGame> = ({
  id,
  imageUrl,
  title,
  price,
  version,
  genres,
  developers,
}) => {
  const dispatch = useDispatch();

  const [activeVersion, setActiveVersion] = React.useState(version[0]);
  const cartItem = useSelector(selectCartItem(id, versionNames, activeVersion));
  const itemCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: TCartItem = {
      id,
      imageUrl,
      title,
      price,
      version: versionNames[activeVersion],
      count: 0,
    };

    dispatch(addItem(item));
  };

  return (
    <div className="game wrapper_content">
      <img className="game__img" src={imageUrl} alt="game"></img>
      <Link className="game__link" to={`/game/${id}`}>
        <h3 className="game__title text_primary">{title}</h3>
      </Link>
      <div className="game__info text_secondary">
        <p className="game__text">{developers.join(', ')}</p>
        <p className="game__text">{genres.join(', ')}</p>
      </div>

      <ul className="game__options ">
        {version.map((versionId) => (
          <li
            className={'game__option text_small' + (activeVersion === versionId ? ' active' : '')}
            key={versionId}
            onClick={() => setActiveVersion(versionId)}>
            {versionNames[versionId]}
          </li>
        ))}
      </ul>
      <div className="game__buy-block">
        <button className="game__add-btn btn btn_contained btn_color_red" onClick={onClickAdd}>
          Add
          {itemCount > 0 &&
            (itemCount < 100 ? (
              <span className="game__add-btn-count text_small">{itemCount}</span>
            ) : (
              <span className="game__add-btn-count text_small">99</span>
            ))}
        </button>
        <span className="text_primary text_large">${(+price).toFixed(2)}</span>
      </div>
    </div>
  );
};
