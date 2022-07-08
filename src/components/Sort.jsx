import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';

const sortTypes = [
  { name: 'Name (A - Z)', designation: 'title' },
  { name: 'Name (Z - A)', designation: '-title' },
  { name: 'Price (low to high)', designation: 'price' },
  { name: 'Price (high to low)', designation: '-price' },
];

function Sort() {
  const activeSort = useSelector((state) => state.filter.sortType);
  const dispatch = useDispatch();

  const [isOpen, setOpen] = React.useState(false);

  const applySort = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  return (
    <div className="sort">
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
