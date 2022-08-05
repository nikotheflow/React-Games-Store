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
        <h2 className="cart__title text_title">
          <svg className="cart__title-img" x="0px" y="0px" viewBox="0 0 512 512">
            <rect width="66.783" height="33.391" />
            <path
              d="M389.565,89.044h-33.391H256h-33.391H100.174V33.391H66.783v89.044h33.391v66.783v33.391h33.391v166.956h33.391v-33.391
			h55.652H256h100.174h33.391h55.652v-33.391h-55.652V222.609h55.652v100.174h33.391V222.609H512v-33.391V89.044H389.565z
			 M222.609,322.783h-55.652V222.609h55.652V322.783z M222.609,189.217h-89.043v-66.783h89.043V189.217z M356.174,322.783H256
			V222.609h100.174V322.783z M356.174,189.217H256v-66.783h100.174V189.217z M478.609,189.217h-89.044v-66.783h89.044V189.217z"
            />
            <rect x="200.348" y="478.609" width="55.652" height="33.391" />
            <rect x="389.565" y="478.609" width="55.652" height="33.391" />
            <rect x="445.217" y="422.957" width="33.391" height="55.652" />
            <polygon
              points="389.565,389.565 256,389.565 200.348,389.565 166.957,389.565 166.957,478.609 200.348,478.609 200.348,422.957 
			256,422.957 256,478.609 289.391,478.609 289.391,422.957 356.174,422.957 356.174,478.609 389.565,478.609 389.565,422.957 
			445.217,422.957 445.217,389.565 		"
            />
          </svg>
          Cart
        </h2>
        <button className="cart__btn-clear btn btn_text" onClick={onClickClear}>
          Clear cart
          <svg
            className="cart__btn-clear-img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16px"
            height="16px">
            <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
          </svg>
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
            <span className="text_main ">Shipping:</span>
            <span className="text_main ">$19.00</span>
          </div>
          <div className="cart__string">
            <span className="text_primary ">Total:</span>
            <span className="text_primary ">${(totalPrice + 19).toFixed(2)}</span>
          </div>

          <div className="cart__btns-group">
            <Link className="btn btn_outlined btn_color_white" to="/">
              Continue shopping
            </Link>
            <Link to="#" className="btn btn_contained btn_color_red">
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
