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
    <div className="cart">
      <div className="cart__header">
        <h2 className="cart__title text_title">Cart</h2>
        <button className="cart__btn-clear btn btn_text" onClick={onClickClear}>
          Clear cart
        </button>
      </div>
      <div className="cart__content">
        <div className="cart__list">
          {items.map((obj: TCartItem) => (
            <CartItem key={obj.id + obj.version} {...obj} />
          ))}
        </div>
        <div className="cart__total-block wrapper_content">
          <span className="cart__total-title text_primary text_large">Order summary</span>
          <div className="cart__string">
            <span className="text_main ">Games ({totalCount}):</span>
            <span className="text_main ">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="cart__string">
            <span className="text_main ">Shipping</span>
            <span className="text_main ">$19.00</span>
          </div>
          <div className="cart__string">
            <span className="text_primary ">Total:</span>
            <span className="text_primary ">${(totalPrice + 19).toFixed(2)}</span>
          </div>

          <Link className="btn btn_outlined btn_color_white" to="/">
            Continue shopping
          </Link>
          <Link to="#" className="btn btn_contained btn_color_red">
            Proceed to checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
