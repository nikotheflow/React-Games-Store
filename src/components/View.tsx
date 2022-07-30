import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectShowItem, selectSortItem } from '../redux/filter/selectors';
import { setCurrentPage, setShow, setSort } from '../redux/filter/slice';
import { SortPropertyEnum, SortOrderEnum, TSort } from '../redux/filter/types';

type PopupClick = MouseEvent & {
  path: Node[];
};

export const sortList: TSort[] = [
  { title: 'name (A - Z)', property: SortPropertyEnum.TITLE, order: SortOrderEnum.ASC },
  { title: 'name (Z - A)', property: SortPropertyEnum.TITLE, order: SortOrderEnum.DESC },
  { title: 'price (low to high)', property: SortPropertyEnum.PRICE, order: SortOrderEnum.ASC },
  { title: 'price (high to low)', property: SortPropertyEnum.PRICE, order: SortOrderEnum.DESC },
];

export const showList: number[] = [4, 8, 12];

export const View: React.FC = React.memo(() => {
  const activeSort = useSelector(selectSortItem);
  const activeShow = useSelector(selectShowItem);
  const dispatch = useDispatch();
  const refSort = React.useRef<HTMLDivElement>(null);

  const [isOpen, setOpen] = React.useState(false);

  const applySort = useCallback((obj: TSort) => {
    dispatch(setSort(obj));
    setOpen(false);
    dispatch(setCurrentPage(1));
  }, []);

  const applyShow = (num: number) => {
    dispatch(setShow(num));
    dispatch(setCurrentPage(1));
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;

      if (refSort.current && !_event.path.includes(refSort.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="view wrapper_content">
      <div className="sort">
        <span className="sort__title text_secondary">Sort by: </span>
        <span
          ref={refSort}
          className="sort__link is-active text_primary"
          onClick={() => setOpen(!isOpen)}>
          {activeSort.title}
        </span>
      </div>
      <div className="show">
        <span className="show__title text_secondary">Show by:</span>
        <ul className="show__list">
          {showList.map((num, i) => (
            <li
              className={'show__item text_secondary' + (activeShow === num ? ' is-active' : '')}
              key={i}
              onClick={() => applyShow(num)}>
              {num}
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="sort__popup wrapper_content">
          {sortList.map((obj, i) => (
            <li
              className={
                'sort__popup-item text_secondary' +
                (activeSort.title === obj.title ? ' is-active' : '')
              }
              key={i}
              onClick={() => applySort(obj)}>
              {obj.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
