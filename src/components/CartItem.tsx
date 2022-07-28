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
    <div className="cart__item">
      <img className="cart__item-img game-img" src={imageUrl} alt="game"></img>
      <div className="cart__item-info">
        <h3 className="cart__item-title">{title}</h3>
        <p className="cart__item-option text_secondary">{version} version</p>
      </div>
      <div className="cart__item-counter ">
        <button className="cart__item-counter-btn btn btn_round" onClick={onClickMinus}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"></path>
          </svg>
        </button>

        <span className="cart__item-counter-number text_primary">{count}</span>

        <button className="cart__item-counter-btn btn btn_round" onClick={onClickPlus}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"></path>
            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"></path>
          </svg>
        </button>
      </div>

      <span className="cart__item-price text_primary">${(count * price).toFixed(2)}</span>
      <button
        className="cart__item-delete-btn btn btn_round btn_round-secondary"
        onClick={onClickRemove}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"></path>
          <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"></path>
        </svg>
      </button>
    </div>
  );
};
