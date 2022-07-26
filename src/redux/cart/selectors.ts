import { RootState } from '../store';

export const selectCart = (state: RootState) => state.cart;
export const selectCartItem =
  (id: string, versionNames: string[], activeVersion: number) => (state: RootState) =>
    state.cart.items.find((obj) => obj.id === id && obj.version === versionNames[activeVersion]);
