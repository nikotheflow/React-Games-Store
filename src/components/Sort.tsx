import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort, selectSortType } from '../redux/slices/filterSlice';

type SortItem = {
  name: string;
  designation: string;
};

type PopupClick = MouseEvent & {
  path: Node[];
};

export const sortTypes: SortItem[] = [
  { name: 'Name (A - Z)', designation: 'title' },
  { name: 'Name (Z - A)', designation: '-title' },
  { name: 'Price (low to high)', designation: 'price' },
  { name: 'Price (high to low)', designation: '-price' },
];

const Sort: React.FC = () => {
  const activeSort = useSelector(selectSortType);
  const dispatch = useDispatch();
  const refSort = React.useRef<HTMLDivElement>(null);

  const [isOpen, setOpen] = React.useState(false);

  const applySort = (obj: SortItem) => {
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
          {activeSort.name}
        </span>
      </span>
      <span className="text__secondary">
        Show by: <b>10</b> 20 30
      </span>
      {isOpen && (
        <ul className="sort__popup">
          {sortTypes.map((obj, i) => (
            <li
              className={
                activeSort.name === obj.name ? 'sort__popup-item active' : 'sort__popup-item'
              }
              key={i}
              onClick={() => applySort(obj)}>
              {obj.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
