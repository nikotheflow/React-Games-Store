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
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
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

export const selectFilter = (state) => state.filter;
export const selectSortType = (state) => state.filter.sortType;

export const { setSearchValue, setActiveGenres, setSort, setCurrentPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
