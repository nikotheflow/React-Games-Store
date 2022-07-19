import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGames = createAsyncThunk(
  'games/fetchGamesStatus',
  async ({ currentPage, genres, title, sort, order }) => {
    const { data } = await axios.get(
      `https://6299c5107b866a90ec42181e.mockapi.io/items?page=${currentPage}&limit=8${genres}${sort}${order}${title}`,
    );
    return data;
  },
);

const initialState = {
  items: [],
  status: 'loading',
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchGames.pending]: (state) => {
      console.log('load');
      state.status = 'loading';
      state.items = [];
    },
    [fetchGames.fulfilled]: (state, action) => {
      console.log('suc');
      state.status = 'success';
      state.items = action.payload;
    },
    [fetchGames.rejected]: (state, action) => {
      console.log('err');
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = gamesSlice.actions;

export default gamesSlice.reducer;
