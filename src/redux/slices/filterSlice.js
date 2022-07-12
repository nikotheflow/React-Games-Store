import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeGenres: '',
  sortType: { name: 'Name (A - Z)', designation: 'title' },
  currentPage: 1,
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
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setActiveGenres, setSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
