import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export type TFetchGamesArgs = {
  currentPage: number;
  genres: string;
  title: string;
  sortBy: string;
  order: string;
};

export type TGame = {
  id: string;
  imageUrl: string;
  title: string;
  version: number[];
  price: number;
  genres: string[];
};

export const fetchGames = createAsyncThunk<TGame[], TFetchGamesArgs>(
  'games/fetchGamesStatus',
  async (params) => {
    const { currentPage, genres, title, sortBy, order } = params;
    const { data } = await axios.get<TGame[]>(
      `https://6299c5107b866a90ec42181e.mockapi.io/items?page=${currentPage}&limit=8${genres}${sortBy}${order}${title}`,
    );
    return data;
  },
);

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface IGamesSliceState {
  items: TGame[];
  status: Status;
}

const initialState: IGamesSliceState = {
  items: [],
  status: Status.LOADING,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<TGame[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });
    builder.addCase(fetchGames.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const selectGamesData = (state: RootState) => state.games;

export const { setItems } = gamesSlice.actions;

export default gamesSlice.reducer;
