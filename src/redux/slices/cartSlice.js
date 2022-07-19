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
      const findItem = state.items.find(
        (obj) => obj.id === action.payload.id && obj.version === action.payload.version,
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items
        .reduce((sum, currentItem) => sum + currentItem.price * currentItem.count, 0)
        .toFixed(2);
      state.totalCount = state.items.reduce((sum, currentItem) => sum + currentItem.count, 0);

      state.items.sort((a, b) => a.id - b.id);
    },

    minusItem(state, action) {
      const findItem = state.items.find(
        (obj) => obj.id === action.payload.id && obj.version === action.payload.version,
      );

      findItem.count--;

      state.totalPrice = state.items
        .reduce((sum, currentItem) => sum + currentItem.price * currentItem.count, 0)
        .toFixed(2);
      state.totalCount = state.items.reduce((sum, currentItem) => sum + currentItem.count, 0);
    },

    removeItem(state, action) {
      state.items = state.items.filter(function (obj) {
        return obj.id !== action.payload.id || obj.version !== action.payload.version;
      });

      state.totalPrice = state.items
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

export const { addItem, minusItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
