import React from 'react';

function Filters() {
  const genres = [
    'Action',
    'Adventure',
    'Indie',
    'Racing',
    'RPG',
    'Simulation',
    'Sports',
    'Strategy',
  ];

  return (
    <div className="filters">
      <span className="filters__title">Genre:</span>
      <ul className="filters__list">
        {genres.map((value, i) => (
          <li className="filters__item" key={i}>
            <label className="filters__item-title">
              <input className="filters__item-checkbox" type="checkbox"></input>
              {value}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filters;
