import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectShowItem, selectSortItem } from '../redux/filter/selectors';
import { setShow, setSort } from '../redux/filter/slice';
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
  const dispatch = useDispatch();
  const refSort = React.useRef<HTMLDivElement>(null);

  const activeShow = useSelector(selectShowItem);

  const [isOpen, setOpen] = React.useState(false);

  const applySort = useCallback((obj: TSort) => {
    dispatch(setSort(obj));
    setOpen(false);
  }, []);

  const applyShow = (num: number) => {
    dispatch(setShow(num));
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
    <div className="view wrapper_content text_secondary">
      <div className="sort">
        <span className="sort__title">Sort by: </span>
        <span ref={refSort} className="sort__link is-active" onClick={() => setOpen(!isOpen)}>
          {activeSort.title}
        </span>
      </div>
      <div className="show ">
        <span className="show__title">Show by:</span>
        <ul className="show__list">
          {showList.map((num, i) => (
            <li
              className={activeShow === num ? 'show__item is-active' : 'show__item'}
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
                activeSort.title === obj.title ? 'sort__popup-item is-active' : 'sort__popup-item'
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
