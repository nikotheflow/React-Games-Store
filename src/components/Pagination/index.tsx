import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

import { selectFilter } from '../../redux/filter/selectors';
import { selectGamesData } from '../../redux/games/selectors';

import styles from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
  const { totalGames, items } = useSelector(selectGamesData);
  const { searchValue, showItem, activeGenres, activeDeveloper } = useSelector(selectFilter);

  const pageCount =
    searchValue || activeGenres || activeDeveloper
      ? items.length / showItem
      : totalGames / showItem;

  return (
    <ReactPaginate
      className={styles.root}
      previousLabel="<"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageCount={pageCount}
      forcePage={currentPage - 1}
    />
  );
};
