export type TCartItem = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  version: string;
  count: number;
};

export interface ICartSliceState {
  items: TCartItem[];
  totalPrice: number;
  totalCount: number;
}
