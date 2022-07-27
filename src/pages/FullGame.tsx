import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

const FullGame: React.FC = () => {
  const [game, setGame] = React.useState<{
    imageUrl: string;
    title: string;
    genres: string[];
    price: number;
  }>();
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
      <h2 className="game-page__title">{game.title}</h2>
      <div className="game-page__image-wrapper wrapper_content">
        <img className="game-page__image" src={`../${game.imageUrl}`} alt="game" width="300"></img>
      </div>
      <div className="game-page__info wrapper_content">
        <p className="game-page__description">
          Super Metroid is arguably the most influential game in the 2D action/adventure genre, and
          it’s easy to see why. With flawless action, impeccable level design, out-of-this-world
          atmosphere, a totally badass heroine, and an enormous overworld to explore, few games can
          hope to reach its rung on the ladder of pure gaming bliss. From the moment you set foot on
          Zebes to the moment you leave it exploding in your wake, every moment of this game is
          unadulterated fun, and it only gets better the further you get. As one of the best (if not
          the best) entry in the Metroid series, it’s no wonder Samus Aran’s SNES adventure made it
          so high on our list.
        </p>
        <div className="game-page__info-footer">
          <p>Genre: {game.genres.join(', ')}</p>
          <p>Developer: Nintendo</p>
        </div>
      </div>
    </div>
  );
};

export default FullGame;
