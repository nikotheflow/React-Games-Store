import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { TFetchGamesArgs, TGame } from './types';

export const fetchGames = createAsyncThunk<TGame[], TFetchGamesArgs>(
  'games/fetchGamesStatus',
  async (params) => {
    const { currentPage, genres, title, sortBy, order } = params;
    const { data } = await axios.get<TGame[]>(
      `https://6299c5107b866a90ec42181e.mockapi.io/items?page=${currentPage}&limit=12${genres}${sortBy}${order}${title}`,
    );
    return data;
  },
);
