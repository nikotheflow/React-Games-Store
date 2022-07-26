import { TCartItem } from '../redux/cart/types';

export const calcTotalCount = (items: TCartItem[]) =>
  items.reduce((sum, currentItem) => sum + currentItem.count, 0);
