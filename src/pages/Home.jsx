import React from 'react';

import Filters from '../components/Filters';
import GameBlock from '../components/GameBlock';
import Skeleton from '../components/GameBlock/Skeleton';
import Sort from '../components/Sort';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeSort, setActiveSort] = React.useState({
    name: 'Name (A - Z)',
    designation: 'title',
  });
  const [activeFilters, setActiveFilters] = React.useState('');

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6299c5107b866a90ec42181e.mockapi.io/items?${
        activeFilters.length > 0 ? `genres=${activeFilters}` : ''
      }&sortBy=${activeSort.designation.replace('-', '')}&order=${
        activeSort.designation[0] === '-' ? 'desc' : 'asc'
      }`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [activeSort, activeFilters]);

  return (
    <>
      <Filters value={activeFilters} onChangeFilters={(i) => setActiveFilters(i)} />
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
            ? [...new Array(4)].map((_, i) => <Skeleton key={i} />)
            : items.map((obj) => <GameBlock key={obj.id} {...obj} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
