import React from 'react';

import Filters from '../components/Filters';
import GameBlock from '../components/GameBlock';
import Skeleton from '../components/GameBlock/Skeleton';
import Sort from '../components/Sort';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeSort, setActiveSort] = React.useState({ name: 'alphabet', designation: 'title' });

  React.useEffect(() => {
    fetch(
      `https://6299c5107b866a90ec42181e.mockapi.io/items?sortBy=${activeSort.designation}&order=asc`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [activeSort]);

  return (
    <>
      <Filters />
      <div className="catalog">
        <div className="catalog__header">
          <div className="catalog__header-left">
            <span className="catalog__title">SNES Games</span>
            <span className="catalog__subtitle">Showed 8 games</span>
          </div>
          <Sort value={activeSort} onChangeSort={(i) => setActiveSort(i)} />
        </div>
        <div className="catalog__main">
          {isLoading
            ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
            : items.map((obj) => <GameBlock key={obj.id} {...obj} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
