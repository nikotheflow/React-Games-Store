import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/cart/slice';

type TCartItemProps = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  version: string;
  count: number;
};

export const CartItem: React.FC<TCartItemProps> = ({
  id,
  imageUrl,
  title,
  price,
  version,
  count,
}) => {
  const dispatch = useDispatch();

  const item = {
    id,
    price,
    version,
    imageUrl,
    title,
    count,
  };

  const onClickPlus = () => {
    dispatch(addItem(item));
  };

  const onClickMinus = () => {
    if (count > 1) {
      dispatch(minusItem(item));
    } else {
      onClickRemove();
    }
  };

  const onClickRemove = () => {
    if (window.confirm('Are you sure you want to delete "' + title + '"?')) {
      dispatch(removeItem(item));
    }
  };

  return (
    <div className="cart-item wrapper_content">
      <div className="cart-item__img-wrapper">
        <img className="cart-item__img" src={imageUrl} alt="game"></img>
      </div>
      <div className="cart-item__info">
        <h3 className="cart-item__title text_primary">{title}</h3>
        <p className="cart-item__option text_secondary">Version: {version}</p>
      </div>
      <div className="cart-item__total-block">
        <span className="cart-item__price text_primary text_large">
          ${price.toFixed(2)} / piece
        </span>
        <div className="cart-item__controls">
          <div className="cart-item__quantity quantity">
            <button className="controls__btn quantity__btn-minus btn" onClick={onClickMinus}>
              -
            </button>
            <span className="quantity__number text_primary">{count}</span>
            <button className="controls__btn quantity__btn-plus btn" onClick={onClickPlus}>
              +
            </button>
          </div>
          <button className="controls__btn btn" onClick={onClickRemove}>
            x
          </button>
        </div>
      </div>
    </div>
  );
};
