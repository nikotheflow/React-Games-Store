import React from 'react';

import qs from 'qs';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  setActiveGenres,
  setCurrentPage,
  setFilters,
  selectFilter,
} from '../redux/slices/filterSlice';
import { fetchGames, selectGamesData } from '../redux/slices/gamesSlice';

import Filters from '../components/Filters';
import GameBlock from '../components/GameBlock';
import Skeleton from '../components/GameBlock/Skeleton';
import Sort from '../components/Sort';
import { sortTypes } from '../components/Sort';
import Pagination from '../components/Pagination';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { items, status } = useSelector(selectGamesData);
  const { searchValue, activeGenres, sortType, currentPage } = useSelector(selectFilter);
  const activeSort = sortType.designation;

  const onChangeFilters = (genre) => {
    dispatch(setActiveGenres(genre));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getGames = async () => {
    const genres = activeGenres ? `&genres=${activeGenres}` : '';
    const title = searchValue ? `&title=${searchValue}` : '';
    const sort = '&sortBy=' + activeSort.replace('-', '');
    const order = '&order=' + (activeSort[0] === '-' ? 'desc' : 'asc');

    dispatch(
      fetchGames({
        currentPage,
        genres,
        title,
        sort,
        order,
      }),
    );
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortType = sortTypes.find((obj) => obj.designation === params.sortBy);

      dispatch(
        setFilters({
          ...params,
          sortType,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        currentPage,
        activeGenres,
        sortBy: sortType.designation,
        order: sortType.designation[0] === '-' ? 'desc' : 'asc',
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [currentPage, sortType, activeGenres]);

  React.useEffect(() => {
    if (!isSearch.current) {
      getGames();
    }

    isSearch.current = false;
  }, [currentPage, activeGenres, searchValue, activeSort]);

  return (
    <>
      <Filters value={activeGenres} onChangeFilters={onChangeFilters} />
      <div className="catalog">
        <div className="catalog__header">
          <div className="catalog__header-left">
            <span className="catalog__title">SNES Games</span>
            <span className="catalog__subtitle">Showed {items.length} games</span>
          </div>
          {status !== 'error' && <Sort />}
        </div>
        {status === 'error' && (
          <p className="text__main text__center">
            Games catalog could not be loaded. Please try again later.
          </p>
        )}
        <div className="catalog__main">
          {status === 'loading'
            ? [...new Array(4)].map((_, i) => <Skeleton key={i} />)
            : items.map((obj) => <GameBlock key={obj.id} {...obj} />)}
        </div>
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </>
  );
};

export default Home;
