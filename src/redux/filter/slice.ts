import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { showList, sortList } from '../../components';
import { IFilterSliceState, TSort } from './types';

const initialState: IFilterSliceState = {
  searchValue: '',
  activeGenres: '',
  activeDeveloper: '',
  sortItem: sortList[0],
  showItem: showList[1],
  currentPage: 1,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
      state.currentPage = 1;
    },
    setActiveGenres(state, action: PayloadAction<string>) {
      state.activeGenres = action.payload;
      state.currentPage = 1;
    },
    setActiveDeveloper(state, action: PayloadAction<string>) {
      state.activeDeveloper = action.payload;
      state.currentPage = 1;
    },
    setSort(state, action: PayloadAction<TSort>) {
      state.sortItem = action.payload;
    },
    setShow(state, action: PayloadAction<number>) {
      state.showItem = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<IFilterSliceState>) {
      state.activeGenres = action.payload.activeGenres;
      state.activeDeveloper = action.payload.activeDeveloper;
      state.sortItem = action.payload.sortItem;
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const {
  setSearchValue,
  setActiveGenres,
  setActiveDeveloper,
  setSort,
  setShow,
  setCurrentPage,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
