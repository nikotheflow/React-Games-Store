import React from 'react';
import axios from 'axios';
import qs from 'qs';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SearchContext } from '../App';
import { setActiveGenres, setCurrentPage, setFilters } from '../redux/slices/filterSlice';

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

  const { activeGenres, sortType, currentPage } = useSelector((state) => state.filter);
  const activeSort = sortType.designation;

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeFilters = (genre) => {
    dispatch(setActiveGenres(genre));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchGames = () => {
    setIsLoading(true);

    const genres = activeGenres ? `&genres=${activeGenres}` : '';
    const title = searchValue ? `&title=${searchValue}` : '';
    const sort = '&sortBy=' + activeSort.replace('-', '');
    const order = '&order=' + (activeSort[0] === '-' ? 'desc' : 'asc');

    axios
      .get(
        `https://6299c5107b866a90ec42181e.mockapi.io/items?page=${currentPage}&limit=8${genres}${sort}${order}${title}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
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
      fetchGames();
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
            <span className="catalog__subtitle">Showed 8 games</span>
          </div>
          <Sort />
        </div>
        <div className="catalog__main">
          {isLoading
            ? [...new Array(4)].map((_, i) => <Skeleton key={i} />)
            : items.map((obj) => <GameBlock key={obj.id} {...obj} />)}
        </div>
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </>
  );
};

export default Home;
