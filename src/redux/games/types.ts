export type TFetchGamesArgs = {
  currentPage: number;
  genres: string;
  developer: string;
  title: string;
  sortBy: string;
  order: string;
  limit: number;
};

export type TGame = {
  id: string;
  imageUrl: string;
  title: string;
  version: number[];
  price: number;
  genres: string[];
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IGamesSliceState {
  items: TGame[];
  status: Status;
  totalGames: number;
}
