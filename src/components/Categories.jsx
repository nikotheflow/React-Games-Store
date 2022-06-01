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
        {genres.map((value) => (
          <li className="categories__item">
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
