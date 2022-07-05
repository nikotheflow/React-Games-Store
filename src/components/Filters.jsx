import React from 'react';

function Filters({ value, onChangeFilters }) {
  const genres = ['Action', 'Adventure', "Beat'em up", 'Platformer', 'RPG'];

  const applyFilters = (i) => {
    onChangeFilters(i);
  };

  return (
    <div className="filters">
      <span className="filters__title">Genre:</span>
      <ul className="filters__list">
        {genres.map((value, i) => (
          <li className="filters__item" key={i}>
            <label className="filters__item-title">
              <input
                className="filters__item-checkbox"
                name="genres"
                type="radio"
                onClick={() => applyFilters(value)}></input>
              {value}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filters;
