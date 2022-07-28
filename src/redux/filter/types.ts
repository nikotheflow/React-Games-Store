export enum SortPropertyEnum {
  TITLE = 'title',
  PRICE = 'price',
}

export enum SortOrderEnum {
  ASC = 'asc',
  DESC = 'desc',
}

export type TSort = {
  title: string;
  property: SortPropertyEnum;
  order: SortOrderEnum;
};

export interface IFilterSliceState {
  searchValue: string;
  activeGenres: string;
  sortItem: TSort;
  showItem: number;
  currentPage: number;
}
