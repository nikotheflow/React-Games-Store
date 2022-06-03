import React from 'react';

function Sort() {
  const [isOpen, setOpen] = React.useState(false);
  const [activeSort, setActiveSort] = React.useState(0);

  const sortTypes = ['алфавиту', 'рейтингу', 'цене'];

  const applySort = (i) => {
    setActiveSort(i);
    setOpen(false);
  };

  return (
    <div className="sort">
      <span className="sort__title">
        Сортировка по:{' '}
        <span className="sort__link" onClick={() => setOpen(!isOpen)}>
          {sortTypes[activeSort]}
        </span>
      </span>
      {isOpen && (
        <ul className="sort__popup">
          {sortTypes.map((sortType, i) => (
            <li
              className={activeSort === i ? 'sort__popup-item active' : 'sort__popup-item'}
              key={i}
              onClick={() => applySort(i)}>
              {sortType}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sort;
