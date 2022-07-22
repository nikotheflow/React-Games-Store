import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import Search from './Search';

import logoImg from '../assets/img/logo.png';
import cartImg from '../assets/img/cart.svg';
import { selectCart } from '../redux/slices/cartSlice';

const Header: React.FC = () => {
  const { totalPrice, totalCount } = useSelector(selectCart);
  const location = useLocation();

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
          <Search />
          <Link to="/cart">
            <button className="btn btn_contained">
              <span>${totalPrice}</span>
              <div className="vertical-divider"></div>
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
}

export default Header;