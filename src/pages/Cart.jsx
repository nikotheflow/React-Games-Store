import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="wrapper">
      <div className="cart">
        <div className="cart__header">
          <h2 className="cart__title">Cart</h2>
          <button className="cart__clear-btn btn btn_text">Clear cart</button>
        </div>
        <div className="cart__main">
          <div className="cart__item">
            <img className="cart__item-img game-img" src="./img/1.jpg" alt="game"></img>
            <div className="cart__item-info">
              <h3 className="cart__item-title">Super Mario World</h3>
              <p className="cart__item-option text__secondary">Physical</p>
            </div>
            <div className="cart__item-counter ">
              <button className="cart__item-counter-btn btn btn_round">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"></path>
                </svg>
              </button>

              <span className="cart__item-counter-number text__primary">2</span>
              <button className="cart__item-counter-btn btn btn_round">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"></path>
                  <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"></path>
                </svg>
              </button>
            </div>

            <span className="cart__item-price text__primary">$88.88</span>
            <button className="cart__item-delete-btn btn btn_round btn_round-secondary">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"></path>
                <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="cart__total">
          <span className="text__primary">Total: 7 games</span>
          <span className="text__primary">Order price: $274.74</span>
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
