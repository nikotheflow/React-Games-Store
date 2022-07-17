import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import CartItem from '../components/CartItem';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  console.log({ ...items });

  return (
    <div className="wrapper">
      <div className="cart">
        <div className="cart__header">
          <h2 className="cart__title">Cart</h2>
          <button className="cart__clear-btn btn btn_text">Clear cart</button>
        </div>
        <div className="cart__main">
          {items.map((obj) => (
            <CartItem key={obj.id} {...obj} />
          ))}
        </div>
        <div className="cart__total">
          <span className="text__primary">Total: 7 games</span>
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
