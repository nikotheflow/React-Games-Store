import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';

export const sortTypes = [
  { name: 'Name (A - Z)', designation: 'title' },
  { name: 'Name (Z - A)', designation: '-title' },
  { name: 'Price (low to high)', designation: 'price' },
  { name: 'Price (high to low)', designation: '-price' },
];

function Sort() {
  const activeSort = useSelector((state) => state.filter.sortType);
  const dispatch = useDispatch();
  const refSort = React.useRef();

  const [isOpen, setOpen] = React.useState(false);

  const applySort = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.path.includes(refSort.current)) {
        setOpen(false);
        console.log('yo');
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={refSort} className="sort">
      <span className="sort__title">
        Sort by:{' '}
        <span className="sort__link" onClick={() => setOpen(!isOpen)}>
          {activeSort.name}
        </span>
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
}

export default Sort;
