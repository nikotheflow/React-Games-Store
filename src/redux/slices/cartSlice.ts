import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { getCartFromLS } from '../../utils/getCartFromLS';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { calcTotalCount } from '../../utils/calcTotalCount';

export type TCartItem = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  version: string;
  count: number;
};

interface ICartSliceState {
  items: TCartItem[];
  totalPrice: number;
  totalCount: number;
}

const { items, totalPrice, totalCount } = getCartFromLS();

const initialState: ICartSliceState = {
  items,
  totalPrice,
  totalCount,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TCartItem>) {
      const findItem = state.items.find(
        (obj) => obj.id === action.payload.id && obj.version === action.payload.version,
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);

      state.items.sort((a, b) => +a.id - +b.id);
    },

    minusItem(state, action: PayloadAction<TCartItem>) {
      const findItem = state.items.find(
        (obj) => obj.id === action.payload.id && obj.version === action.payload.version,
      );

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
    },

    removeItem(state, action: PayloadAction<TCartItem>) {
      state.items = state.items.filter(function (obj) {
        return obj.id !== action.payload.id || obj.version !== action.payload.version;
      });

      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItem =
  (id: string, versionNames: string[], activeVersion: number) => (state: RootState) =>
    state.cart.items.find((obj) => obj.id === id && obj.version === versionNames[activeVersion]);

export const { addItem, minusItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
