import React from 'react';

import { SearchContext } from '../App';

import Filters from '../components/Filters';
import GameBlock from '../components/GameBlock';
import Skeleton from '../components/GameBlock/Skeleton';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeSort, setActiveSort] = React.useState({
    name: 'Name (A - Z)',
    designation: 'title',
  });
  const [activeFilters, setActiveFilters] = React.useState('');
  const [activePage, setActivePage] = React.useState(0);

  const genresFetch = activeFilters.length ? `genres=${activeFilters}` : '';
  const sortFetch = activeSort.designation.replace('-', '');
  const orderFetch = activeSort.designation[0] === '-' ? 'desc' : 'asc';
  const titleFetch = searchValue ? `title=${searchValue}` : '';

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6299c5107b866a90ec42181e.mockapi.io/items?page=${
        activePage + 1
      }&limit=4&${genresFetch}&sortBy=${sortFetch}&order=${orderFetch}&${titleFetch}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [activePage, genresFetch, sortFetch, orderFetch, titleFetch]);

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
        <Pagination activePage={activePage} setActivePage={setActivePage} />
      </div>
    </>
  );
};

export default Home;
