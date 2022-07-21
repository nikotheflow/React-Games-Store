import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        console.log(game);
      } catch (error) {
        alert('Error while loading game!');
        navigate('/');
      }
    }

    fetchGame();
  }, []);

  if (!game) {
    return <p>Loading...</p>;
  }

  return (
    <div className="game">
      <img src={`../${game.imageUrl}`} alt="game" width="300"></img>
      <h2>{game.title}</h2>
      <p>{game.genres}</p>
      <span className="game__price">${game.price}</span>
    </div>
  );
};

export default FullGame;