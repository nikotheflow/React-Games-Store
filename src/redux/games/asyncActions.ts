import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { TFetchGamesArgs, TGame } from './types';

export const fetchGames = createAsyncThunk<TGame[], TFetchGamesArgs>(
  'games/fetchGamesStatus',
  async (params) => {
    const { currentPage, genres, developer, title, sortBy, order, limit } = params;
    const { data } = await axios.get<TGame[]>(
      `https://6299c5107b866a90ec42181e.mockapi.io/items?page=${currentPage}&limit=${limit}${sortBy}${order}${genres}${developer}${title}`,
    );
    return data;
  },
);
