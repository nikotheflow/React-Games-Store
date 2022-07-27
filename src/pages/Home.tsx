import React, { useCallback } from 'react';

import qs from 'qs';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';

import { fetchGames } from '../redux/games/asyncActions';
import { selectGamesData } from '../redux/games/selectors';
import { TFetchGamesArgs, TGame } from '../redux/games/types';

import { selectFilter } from '../redux/filter/selectors';
import { setActiveGenres, setCurrentPage, setFilters } from '../redux/filter/slice';

import Filters from '../components/Filters';
import GameBlock from '../components/GameBlock';
import Skeleton from '../components/GameBlock/Skeleton';
import Sort, { sortList } from '../components/Sort';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { items, status } = useSelector(selectGamesData);
  const { searchValue, activeGenres, sortItem, currentPage } = useSelector(selectFilter);
  const activeSort = sortItem.property;

  const onChangeFilters = useCallback((genre: string) => {
    dispatch(setActiveGenres(genre));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getGames = async () => {
    const genres = activeGenres ? `&genres=${activeGenres}` : '';
    const title = searchValue ? `&title=${searchValue}` : '';
    const sortBy = '&sortBy=' + activeSort.replace('-', '');
    const order = '&order=' + (activeSort[0] === '-' ? 'desc' : 'asc');

    dispatch(
      fetchGames({
        currentPage,
        genres,
        title,
        sortBy,
        order,
      }),
    );
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as unknown as TFetchGamesArgs;
      const sortItem = sortList.find((obj) => obj.property === params.sortBy);

      dispatch(
        setFilters({
          searchValue: params.title,
          activeGenres: params.genres,
          currentPage: params.currentPage,
          sortItem: sortItem ? sortItem : sortList[0],
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
        sortBy: sortItem.property,
        order: sortItem.property[0] === '-' ? 'desc' : 'asc',
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [currentPage, sortItem, activeGenres]);

  React.useEffect(() => {
    if (!isSearch.current) {
      getGames();
    }

    isSearch.current = false;
  }, [currentPage, activeGenres, searchValue, activeSort]);

  const games = items.map((obj: TGame) => <GameBlock {...obj} key={obj.id} />);
  const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />);

  return (
    <>
      <div className="catalog">
        <div className="catalog__header">
          <h2 className="catalog__title">Super Nintendo Entertainment System</h2>
          <span className="catalog__count text__secondary">{items.length} games</span>
        </div>
        {status === 'error' && (
          <p className="text__main text__center wrapper_content">
            Games catalog could not be loaded. Please try again later.
          </p>
        )}
        {status !== 'error' && (
          <div className="catalog__main">
            <Filters value={activeGenres} onChangeFilters={onChangeFilters} />
            <div className="catalog__content">
              <Sort />
              <div className="catalog__items">{status === 'loading' ? skeletons : games}</div>
              <Pagination currentPage={currentPage} onChangePage={onChangePage} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
