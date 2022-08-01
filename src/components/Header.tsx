import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { Search } from '../components';

import logoImg from '../assets/img/logo.png';
import cartImg from '../assets/img/cart.svg';
import { selectCart } from '../redux/cart/selectors';

export const Header: React.FC = () => {
  const { totalPrice, totalCount, items } = useSelector(selectCart);
  const location = useLocation();
  const isMounted = useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }

    isMounted.current = true;
  }, [items]);

  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img className="logo-img" src={logoImg} width="32" height="32" alt="logo"></img>
          <span className="logo-title">Retro Games Store</span>
        </div>
      </Link>
      {location.pathname !== '/cart' && (
        <div className="header__right">
          {!location.pathname.startsWith('/game/') && <Search />}
          <Link to="/cart">
            <button className="cart-btn btn btn_contained btn_color_red">
              <span className="cart-btn__total">${totalPrice}</span>
              <div className="cart-btn__vertical-divider"></div>
              <div className="cart-btn__counter">
                <img
                  className="cart-btn__img"
                  src={cartImg}
                  width="20"
                  height="20"
                  alt="cart"></img>
                <span>{totalCount}</span>
              </div>
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};
