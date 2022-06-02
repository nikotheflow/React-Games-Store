import React from 'react';

function Categories() {
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
    <div className="categories">
      <span className="categories__title">Genre:</span>
      <ul className="categories__list">
        {genres.map((value, i) => (
          <li className="categories__item" key={i}>
            <label className="categories__item-title">
              <input className="categories__item-checkbox" type="checkbox"></input>
              {value}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
