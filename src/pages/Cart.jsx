import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { clearCart } from '../redux/slices/cartSlice';

import CartItem from '../components/CartItem';
import CartEmpty from '../components/CartEmpty';

const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector((state) => state.cart);

  const onClickClear = () => {
    dispatch(clearCart());
  };

  if (!totalCount) {
    return <CartEmpty />;
  }

  return (
    <div className="wrapper">
      <div className="cart">
        <div className="cart__header">
          <h2 className="cart__title">Cart</h2>
          <button className="cart__clear-btn btn btn_text" onClick={onClickClear}>
            Clear cart
          </button>
        </div>
        <div className="cart__main">
          {items.map((obj) => (
            <CartItem key={obj.id + obj.version} {...obj} />
          ))}
        </div>
        <div className="cart__total">
          <span className="text__primary">Total: {totalCount} games</span>
          <span className="text__primary">Order price: ${totalPrice}</span>
        </div>
        <div className="cart__buttons">
          <Link to="/">
            <button className="btn btn_outlined">Continue shopping</button>
          </Link>
          <button className="btn btn_contained">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
