import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../redux/filter/selectors';
import { setActiveDeveloper, setActiveGenres } from '../redux/filter/slice';

const genres = [
  'Action',
  'Adventure',
  "Beat'em up",
  'Fighting',
  'Platformer',
  'Racing',
  'RPG',
  "Shoot'em up",
];

const developers = ['Ape', 'Capcom', 'HAL Laboratory', 'Konami', 'Nintendo', 'Rare', 'Square'];

export const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const { activeGenres, activeDeveloper } = useSelector(selectFilter);

  const applyGenre = (genre: string) => {
    dispatch(setActiveGenres(genre));
    dispatch(setActiveDeveloper(''));
  };

  const applyDeveloper = (developer: string) => {
    dispatch(setActiveDeveloper(developer));
    dispatch(setActiveGenres(''));
  };

  const clearFilters = () => {
    dispatch(setActiveGenres(''));
    dispatch(setActiveDeveloper(''));
  };

  return (
    <div className="filters">
      <div className="filters__filter wrapper_content">
        <p className="filter__title text_primary">Genre:</p>
        <ul className="filter__list">
          {genres.map((genre, i) => (
            <li
              className={
                'filter__item text_secondary ' + (genre === activeGenres ? 'is-active' : '')
              }
              key={i}
              onClick={() => {
                applyGenre(genre);
              }}>
              {genre}
            </li>
          ))}
        </ul>
      </div>
      <div className="filter__filter wrapper_content">
        <p className="filter__title text_primary">Developer:</p>
        <ul className="filter__list">
          {developers.map((developer, i) => (
            <li
              className={
                'filter__item text_secondary ' + (developer === activeDeveloper ? 'is-active' : '')
              }
              key={i}
              onClick={() => {
                applyDeveloper(developer);
              }}>
              {developer}
            </li>
          ))}
        </ul>
      </div>
      <button
        className=" btn btn_contained btn_color_white text_secondary"
        onClick={() => {
          clearFilters();
        }}>
        Reset filters
      </button>
    </div>
  );
};
