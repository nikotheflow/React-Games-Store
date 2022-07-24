import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type TSortItem = {
  name: string;
  designation: 'title' | '-title' | 'price' | '-price';
};

export interface IFilterSliceState {
  searchValue: string;
  activeGenres: string;
  sortType: TSortItem;
  currentPage: number;
}

const initialState: IFilterSliceState = {
  searchValue: '',
  activeGenres: '',
  sortType: { name: 'Name (A - Z)', designation: 'title' },
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
    setSort(state, action: PayloadAction<TSortItem>) {
      state.sortType = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<IFilterSliceState>) {
      state.activeGenres = action.payload.activeGenres;
      state.sortType = action.payload.sortType;
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;
export const selectSortType = (state: RootState) => state.filter.sortType;

export const { setSearchValue, setActiveGenres, setSort, setCurrentPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
