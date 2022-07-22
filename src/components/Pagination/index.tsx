import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  onChangePage: any;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      previousLabel="<"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
