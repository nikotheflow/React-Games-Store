import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeGenres: '',
  sortType: { name: 'Name (A - Z)', designation: 'title' },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveGenres(state, action) {
      state.activeGenres = action.payload;
    },
    setSort(state, action) {
      state.sortType = action.payload;
    },
  },
});

export const { setActiveGenres, setSort } = filterSlice.actions;

export default filterSlice.reducer;
