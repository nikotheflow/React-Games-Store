import React from 'react';

const Cart = () => {
  return (
    <div className="wrapper">
      <div className="cart__header">
        <p className="cart__title">Cart</p>
        <button className="cart__clear-btn btn">Clear cart</button>
      </div>
      <div className="cart__main">
        <div className="cart__item">
          <img className="cart__item-img"></img>
          <div className="cart__item-info">
            <p className="cart__item-title">Super Mario World</p>
            <p className="cart__item-option">Physical</p>
          </div>
          <div className="cart__item-counter">2</div>
          <span className="cart__item-price">$88.88</span>
          <button className="cart__item-delete-btn btn">X</button>
        </div>
      </div>
      <div className="cart__footer">
        <div className="cart__total">
          <span>Total: 7 games</span>
          <span>Order price: $274.71</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
