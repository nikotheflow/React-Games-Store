import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

const Pagination = ({ activePage, setActivePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      previousLabel="<"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => setActivePage(e.selected)}
      pageRangeDisplayed={4}
      pageCount={2}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
