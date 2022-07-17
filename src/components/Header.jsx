import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Search from '../components/Search';

import logoImg from '../assets/img/logo.png';
import cartImg from '../assets/img/cart.svg';

function Header() {
  const { totalPrice, items } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img className="logo-img" src={logoImg} width="32" height="32" alt="logo"></img>
          <span className="logo-title">Retro Games Store</span>
        </div>
      </Link>
      <div className="header__right">
        <Search />
        <Link to="/cart">
          <button className="btn btn_contained">
            <span>${totalPrice}</span>
            <div className="vertical-divider"></div>
            <div className="cart-btn__counter">
              <img className="cart-btn__img" src={cartImg} width="20" height="20" alt="cart"></img>
              <span>{totalCount}</span>
            </div>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
