type FiltersProps = {
  value: string;
  onChangeFilters: any;
};

const Filters: React.FC<FiltersProps> = ({ value, onChangeFilters }) => {
  const genres = ['Action', 'Adventure', "Beat'em up", 'Platformer', 'RPG'];

  const applyFilters = (genre: string) => {
    onChangeFilters(genre);
  };

  return (
    <div className="filters wrapper_content">
      <p className="filters__title text__title">Genre:</p>
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
  );
};

export default Filters;
