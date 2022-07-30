import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import { Loading, versionNames } from '../components';
import { TGame } from '../redux/games/types';

const FullGame: React.FC = () => {
  const [game, setGame] = React.useState<TGame>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchGame() {
      try {
        const { data } = await axios.get(`https://6299c5107b866a90ec42181e.mockapi.io/items/${id}`);
        setGame(data);
      } catch (error) {
        alert('Error while loading game!');
        navigate('/');
      }
    }

    fetchGame();
  }, []);

  if (!game) {
    return <Loading />;
  }

  return (
    <div className="game-page">
      <div className="game-page__header">
        <h2 className="game-page__title text_title">{game.title}</h2>
      </div>

      <div className="game-page__content">
        <div className="game-page__image-wrapper wrapper_content">
          <img
            className="game-page__image"
            src={`../${game.imageUrl}`}
            alt="game"
            width="300"></img>
        </div>
        <div className="game-page__info text_main wrapper_content ">
          <div className="game-page__description">
            <p>{game.description}</p>
          </div>
          <div className="game-page__parameters">
            <p className="game-page__parameter">Developers: {game.developers.join(', ')}</p>
            <p className="game-page__parameter">Genres: {game.genres.join(', ')}</p>
            <p className="game-page__parameter">Year: {game.year}</p>
            <p className="game-page__parameter">
              Versions: {game.version.map((versionId) => versionNames[versionId]).join(', ')}
            </p>
          </div>
        </div>
        <Link className="game-page__return-btn" to="/">
          <a className="btn btn_contained btn_color_white text_secondary">Return to shop</a>
        </Link>
      </div>
    </div>
  );
};

export default FullGame;
