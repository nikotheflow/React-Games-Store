import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterSliceState, SortPropertyEnum, TSort } from './types';

const initialState: IFilterSliceState = {
  searchValue: '',
  activeGenres: '',
  sortItem: { title: 'Name (A - Z)', property: SortPropertyEnum.TITLE_ASC },
  currentPage: 1,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setActiveGenres(state, action: PayloadAction<string>) {
      state.activeGenres = action.payload;
    },
    setSort(state, action: PayloadAction<TSort>) {
      state.sortItem = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<IFilterSliceState>) {
      state.activeGenres = action.payload.activeGenres;
      state.sortItem = action.payload.sortItem;
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const { setSearchValue, setActiveGenres, setSort, setCurrentPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
