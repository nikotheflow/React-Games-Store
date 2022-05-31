import logoImg from '../assets/img/logo.png';
import cartImg from '../assets/img/cart.svg';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo-img" src={logoImg} width="40" height="40" alt="logo"></img>
        <span className="logo-title">Retro Games Store</span>
      </div>
      <button className="cart-btn btn">
        <img className="cart-img" src={cartImg} width="20" height="20" alt="cart"></img>
        <span>Cart: $100</span>
      </button>
    </header>
  );
}

export default Header;
