import { RootState } from '../store';

export const selectFilter = (state: RootState) => state.filter;
export const selectSortItem = (state: RootState) => state.filter.sortItem;
