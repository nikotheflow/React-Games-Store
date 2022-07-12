import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { SearchContext } from '../App';
import { setActiveGenres } from '../redux/slices/filterSlice';

import Filters from '../components/Filters';
import GameBlock from '../components/GameBlock';
import Skeleton from '../components/GameBlock/Skeleton';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';

const Home = () => {
  const dispatch = useDispatch();
  const { activeGenres, sortType } = useSelector((state) => state.filter);
  const activeSort = sortType.designation;

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activePage, setActivePage] = React.useState(0);

  const genres = activeGenres.length ? `genres=${activeGenres}` : '';
  const sort = activeSort.replace('-', '');
  const order = activeSort[0] === '-' ? 'desc' : 'asc';
  const title = searchValue ? `title=${searchValue}` : '';

  const onChangeFilters = (genre) => {
    dispatch(setActiveGenres(genre));
  }; 

  React.useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://6299c5107b866a90ec42181e.mockapi.io/items?page=${
          activePage + 1
        }&limit=4&${genres}&sortBy=${sort}&order=${order}&${title}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [activePage, genres, sort, order, title]);

  return (
    <>
      <Filters value={activeGenres} onChangeFilters={onChangeFilters} />
      <div className="catalog">
        <div className="catalog__header">
          <div className="catalog__header-left">
            <span className="catalog__title">SNES Games</span>
            <span className="catalog__subtitle">Showed 8 games</span>
          </div>
          <Sort />
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
