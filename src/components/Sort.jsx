import React from 'react';

function Sort({ value, onChangeSort }) {
  const [isOpen, setOpen] = React.useState(false);
  const sortTypes = [
    { name: 'alphabet', designation: 'title' },
    { name: 'rating', designation: 'rating' },
    { name: 'price', designation: 'price' },
  ];

  const applySort = (i) => {
    onChangeSort(i);
    setOpen(false);
  };

  return (
    <div className="sort">
      <span className="sort__title">
        Sort by:{' '}
        <span className="sort__link" onClick={() => setOpen(!isOpen)}>
          {value.name}
        </span>
      </span>
      {isOpen && (
        <ul className="sort__popup">
          {sortTypes.map((obj, i) => (
            <li
              className={value.name === obj.name ? 'sort__popup-item active' : 'sort__popup-item'}
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
