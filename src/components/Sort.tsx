import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort, selectSortItem, TSort, SortPropertyEnum } from '../redux/slices/filterSlice';

type PopupClick = MouseEvent & {
  path: Node[];
};

export const sortList: TSort[] = [
  { title: 'Name (A - Z)', property: SortPropertyEnum.TITLE_ASC },
  { title: 'Name (Z - A)', property: SortPropertyEnum.TITLE_DESC },
  { title: 'Price (low to high)', property: SortPropertyEnum.PRICE_ASC },
  { title: 'Price (high to low)', property: SortPropertyEnum.PRICE_DESC },
];

const Sort: React.FC = () => {
  const activeSort = useSelector(selectSortItem);
  const dispatch = useDispatch();
  const refSort = React.useRef<HTMLDivElement>(null);

  const [isOpen, setOpen] = React.useState(false);

  const applySort = (obj: TSort) => {
    dispatch(setSort(obj));
    setOpen(false);
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
    <div ref={refSort} className="sort wrapper_content">
      <span className="text__secondary">
        Sort by:{' '}
        <span className="sort__link" onClick={() => setOpen(!isOpen)}>
          {activeSort.title}
        </span>
      </span>
      <span className="text__secondary">
        Show by: <b>10</b> 20 30
      </span>
      {isOpen && (
        <ul className="sort__popup">
          {sortList.map((obj, i) => (
            <li
              className={
                activeSort.title === obj.title ? 'sort__popup-item active' : 'sort__popup-item'
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
};

export default Sort;
