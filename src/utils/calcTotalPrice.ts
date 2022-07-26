import { TCartItem } from '../redux/cart/types';

export const calcTotalPrice = (items: TCartItem[]) =>
  +items.reduce((sum, currentItem) => sum + currentItem.price * currentItem.count, 0).toFixed(2);
