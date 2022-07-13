import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
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
    setFilters(state, action) {
      state.activeGenres = action.payload.activeGenres;
      state.sortType = action.payload.sortType;
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const { setActiveGenres, setSort, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
