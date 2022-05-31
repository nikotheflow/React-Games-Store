import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Game from './components/Game';

import './scss/app.scss';

import games from '../src/assets/games.json';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Categories />

        <div className="catalog">
          {games.map((obj) => (
            <Game title={obj.name} price={obj.price} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
