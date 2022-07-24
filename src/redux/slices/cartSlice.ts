import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type TCartItem = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  version: string;
  count: number;
};

interface ICartSliceState {
  totalPrice: number;
  totalCount: number;
  items: TCartItem[];
}

const initialState: ICartSliceState = {
  totalPrice: Number(0),
  totalCount: Number(0),
  items: [],
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

      state.totalPrice = +state.items
        .reduce((sum, currentItem) => sum + currentItem.price * currentItem.count, 0)
        .toFixed(2);
      state.totalCount = state.items.reduce((sum, currentItem) => sum + currentItem.count, 0);

      state.items.sort((a, b) => +a.id - +b.id);
    },

    minusItem(state, action: PayloadAction<TCartItem>) {
      const findItem = state.items.find(
        (obj) => obj.id === action.payload.id && obj.version === action.payload.version,
      );

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = +state.items
        .reduce((sum, currentItem) => sum + currentItem.price * currentItem.count, 0)
        .toFixed(2);
      state.totalCount = state.items.reduce((sum, currentItem) => sum + currentItem.count, 0);
    },

    removeItem(state, action: PayloadAction<TCartItem>) {
      state.items = state.items.filter(function (obj) {
        return obj.id !== action.payload.id || obj.version !== action.payload.version;
      });

      state.totalPrice = +state.items
        .reduce((sum, currentItem) => sum + currentItem.price * currentItem.count, 0)
        .toFixed(2);
      state.totalCount = state.items.reduce((sum, currentItem) => sum + currentItem.count, 0);
    },

    clearCart(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItem =
  (id: string, versionNames: string[], activeVersion: number) => (state: RootState) =>
    state.cart.items.find((obj) => obj.id === id && obj.version === versionNames[activeVersion]);

export const { addItem, minusItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
