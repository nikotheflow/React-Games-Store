import { TCartItem } from '../redux/slices/cartSlice';

export const calcTotalCount = (items: TCartItem[]) =>
  items.reduce((sum, currentItem) => sum + currentItem.count, 0);
