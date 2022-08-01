import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectCart } from '../redux/cart/selectors';
import { clearCart } from '../redux/cart/slice';
import { TCartItem } from '../redux/cart/types';

import { CartItem, CartEmpty } from '../components';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(selectCart);

  const onClickClear = () => {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      dispatch(clearCart());
    }
  };

  if (!totalCount) {
    return <CartEmpty />;
  }

  return (
    <div className="cart wrapper_content">
      <div className="cart__header">
        <h2 className="cart__title text_title">Cart</h2>
        <button className="cart__clear-btn btn btn_text" onClick={onClickClear}>
          Clear cart
        </button>
      </div>
      <div className="cart__main">
        {items.map((obj: TCartItem) => (
          <CartItem key={obj.id + obj.version} {...obj} />
        ))}
      </div>
      <div className="cart__total">
        <span className="text_primary">Total: {totalCount} games</span>
        <span className="text_primary">Order price: ${totalPrice}</span>
      </div>
      <div className="cart__buttons">
        <Link to="/">
          <button className="btn btn_outlined btn_color_white">Continue shopping</button>
        </Link>
        <button className="btn btn_contained btn_color_red">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default Cart;
