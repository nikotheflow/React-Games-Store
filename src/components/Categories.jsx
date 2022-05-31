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
      <span className="categories-title">Genre:</span>
      <ul className="categories-list">
        {genres.map((value) => (
          <li className="categories-item">
            <label>
              <input type="checkbox"></input>
              {value}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
