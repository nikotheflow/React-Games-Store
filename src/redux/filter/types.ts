export enum SortPropertyEnum {
  TITLE_ASC = 'title',
  TITLE_DESC = '-title',
  PRICE_ASC = 'price',
  PRICE_DESC = '-price',
}

export type TSort = {
  title: string;
  property: SortPropertyEnum;
};

export interface IFilterSliceState {
  searchValue: string;
  activeGenres: string;
  sortItem: TSort;
  currentPage: number;
}
