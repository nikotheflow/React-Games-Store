import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: Number(0),
  totalCount: Number(0),
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj, index) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalCount++;
      state.totalPrice = (
        +(+state.totalPrice).toFixed(2) + +(+action.payload.price).toFixed(2)
      ).toFixed(2);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      const indexOfFindItem = state.items.findIndex((obj) => obj.id === action.payload.id);

      findItem.count--;
      if (findItem.count === 0) {
        state.items.splice(indexOfFindItem, 1);
      }

      state.totalCount--;
      state.totalPrice = (
        +(+state.totalPrice).toFixed(2) - +(+action.payload.price).toFixed(2)
      ).toFixed(2);
    },
    removeItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      state.totalCount -= findItem.count;
      state.totalPrice = (
        +(+state.totalPrice).toFixed(2) - +(+action.payload.price * findItem.count).toFixed(2)
      ).toFixed(2);

      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
    },
    clearCart(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, minusItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
