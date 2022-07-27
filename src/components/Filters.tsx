import React from 'react';

type FiltersProps = {
  value: string;
  onChangeFilters: (genre: string) => void;
};

const genres = ['Action', 'Adventure', "Beat'em up", 'Platformer', 'RPG'];
const devlopers = ['Nintendo', 'Square', 'Capcom', 'Midway', 'Rare', 'Konami', 'Quintet', 'Amccus'];

export const Filters: React.FC<FiltersProps> = React.memo(({ onChangeFilters }) => {
  const applyFilters = (genre: string) => {
    onChangeFilters(genre);
  };

  return (
    <div className="filters">
      <div className="wrapper_content">
        <p className="filters__title text__title">Genres:</p>
        <ul className="filters__list">
          {genres.map((genre, i) => (
            <li className="filters__item" key={i}>
              <label className="filters__item-title text__secondary">
                <input
                  className="filters__item-checkbox"
                  name="genres"
                  type="radio"
                  onClick={() => applyFilters(genre)}></input>
                {genre}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="wrapper_content">
        <p className="filters__title text__title">Developers:</p>
        <ul className="filters__list">
          {devlopers.map((devloper, i) => (
            <li className="filters__item" key={i}>
              <label className="filters__item-title text__secondary">
                <input
                  className="filters__item-checkbox"
                  name="genres"
                  type="radio"
                  onClick={() => applyFilters(devloper)}></input>
                {devloper}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
