import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Game from './components/Game';
import Sort from './components/Sort';

import './scss/app.scss';

import games from '../src/assets/games.json';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Categories />

        <div className="catalog">
          <div className="catalog__header">
            <Sort />
          </div>
          <div className="catalog__main">
            {games.map((obj) => (
              <Game key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
