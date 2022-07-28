import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchGames } from './asyncActions';

import { IGamesSliceState, Status, TGame } from './types';

const initialState: IGamesSliceState = {
  items: [],
  status: Status.LOADING,
  totalGames: 15,
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

export const { setItems } = gamesSlice.actions;

export default gamesSlice.reducer;
