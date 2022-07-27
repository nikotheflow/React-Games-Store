import React from 'react';
import { Link } from 'react-router-dom';

import emptyImg from '../assets/img/marioDeath.gif';

export const CartEmpty: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="cart wrapper_content">
        <img src={emptyImg} width="200" height="200" alt="mario death"></img>
        <h2 className="cart__title">Your cart is empty!</h2>
        <div className="cart__text-block">
          <p className="text__main">
            Before proceed to checkout you must add some products to the shipping cart.
          </p>
          <p className="text__main">
            You will find a lot of interesting products on the shop page.
          </p>
        </div>
        <Link to="/">
          <button className="btn btn_outlined">Return to shop</button>
        </Link>
      </div>
    </div>
  );
};
