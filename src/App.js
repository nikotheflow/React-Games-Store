import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import Game from './components/Game';
import Skeleton from './components/Game/Skeleton';
import Sort from './components/Sort';

import './scss/app.scss';
import React from 'react';

//import games from '../src/assets/games.json';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://6299c5107b866a90ec42181e.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Filters />

        <div className="catalog">
          <div className="catalog__header">
            <div className="catalog__header-left">
              <span className="catalog__title">SNES Games</span>
              <span className="catalog__subtitle">Showed 8 games</span>
            </div>
            <Sort />
          </div>
          <div className="catalog__main">
            {items.map((obj) => (
              <Game key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
