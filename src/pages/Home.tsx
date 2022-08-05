import React from 'react';

import qs from 'qs';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';

import { fetchGames } from '../redux/games/asyncActions';
import { selectGamesData } from '../redux/games/selectors';
import { TFetchGamesArgs, TGame } from '../redux/games/types';

import { selectFilter } from '../redux/filter/selectors';
import { setCurrentPage, setFilters } from '../redux/filter/slice';

import { Filters, GameBlock, Skeleton, View, Pagination, sortList, showList } from '../components/';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { items, status } = useSelector(selectGamesData);
  const { searchValue, activeGenres, activeDeveloper, sortItem, currentPage, showItem } =
    useSelector(selectFilter);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as unknown as TFetchGamesArgs;
      const sortItem = sortList.find(
        (obj) => obj.property === params.sortBy && obj.order === params.order,
      );
      const showItem = showList.find((number) => number === +params.limit);

      console.log(showItem ? showItem : showList[1]);
      dispatch(
        setFilters({
          searchValue: params.title,
          activeGenres: params.genres,
          activeDeveloper: params.developer,
          currentPage: params.currentPage,
          sortItem: sortItem ? sortItem : sortList[0],
          showItem: showItem ? showItem : showList[1],
        }),
      );

      isSearch.current = true;
    }
  }, [dispatch]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        currentPage,
        limit: showItem,
        sortBy: sortItem.property,
        order: sortItem.order,
      });
      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [currentPage, sortItem, showItem, navigate]);

  React.useEffect(() => {
    const getGames = async () => {
      const genres = activeGenres ? `&genres=${activeGenres}` : '';
      const developer = activeDeveloper ? `&developers=${activeDeveloper}` : '';
      const title = searchValue ? `&title=${searchValue}` : '';
      const sortBy = '&sortBy=' + sortItem.property;
      const order = '&order=' + sortItem.order;
      const limit = showItem;

      dispatch(
        fetchGames({
          currentPage,
          limit,
          genres,
          developer,
          sortBy,
          order,
          title,
        }),
      );
    };

    if (!isSearch.current) {
      getGames();
    }

    isSearch.current = false;
  }, [currentPage, sortItem, showItem, activeGenres, activeDeveloper, searchValue, dispatch]);

  const games = items.map((obj: TGame) => <GameBlock {...obj} key={obj.id} />);
  const skeletons = [...new Array(showItem)].map((_, i) => <Skeleton key={i} />);

  const isNotFoundGames = searchValue && status === 'success' && items.length === 0;

  return (
    <div className="catalog">
      <div className="catalog__header">
        <h2 className="catalog__title text_title">Super Nintendo Entertainment System games</h2>
      </div>
      {status === 'error' && (
        <p className="text_main text_center wrapper_content">
          Games catalog could not be loaded. Please try again later.
        </p>
      )}
      {status !== 'error' && (
        <div className="catalog__main">
          <Filters />
          <div className="catalog__content">
            <View />
            {status === 'loading' ? (
              <div className="catalog__items">{skeletons}</div>
            ) : isNotFoundGames ? (
              <p className="text_main text_center">
                There is no games with such parameters. Please try to find anything else.
              </p>
            ) : (
              <div className="catalog__items">{games}</div>
            )}
            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
