import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getCartFromLS } from '../../utils/getCartFromLS';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { calcTotalCount } from '../../utils/calcTotalCount';

import { ICartSliceState, TCartItem } from './types';

const initialState: ICartSliceState = getCartFromLS();

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

export const { addItem, minusItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
