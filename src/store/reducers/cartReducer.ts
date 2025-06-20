import { createReducer } from "@reduxjs/toolkit";
import {
  addToCart,
  clearCart,
  delFromCart,
} from "@/store/actions/cartActions";

export interface Product {
  id: string;
  name: string;
  description: string
  price: number;
  imageUrl?: string;
  quantity?: number;
}

interface ShoppingState {
  products: Product[];
  cart: Product[];
  total: number;
}

export const initialState: ShoppingState = {
  products: [],
  cart: [],
  total: 0,
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const newItem = action.payload;
      const itemInCart = state.cart.find((item) => item.id === newItem.id);

      if (itemInCart) {
        itemInCart.quantity = (itemInCart.quantity || 1) + 1;
      } else {
        state.cart.push({ ...newItem, quantity: 1 });
      }

      state.total += newItem.price;
    })
    .addCase(clearCart, (state) => {
      state.cart = [];
      state.total = 0;
    })
    .addMatcher(
      (action): action is ReturnType<typeof delFromCart> =>
        action.type === "REMOVE_ALL_FROM_CART",
      (state, action) => {
        const item = state.cart.find((item) => item.id === action.payload);
        if (!item) return;
        state.cart = state.cart.filter((item) => item.id !== action.payload);
        state.total -= item.price * (item.quantity || 1);
      }
    )
    .addMatcher(
      (action): action is ReturnType<typeof delFromCart> =>
        action.type === "REMOVE_ONE_FROM_CART",
      (state, action) => {
        const item = state.cart.find((item) => item.id === action.payload);
        if (!item) return;

        if ((item.quantity || 1) > 1) {
          item.quantity!--;
          state.total -= item.price;
        } else {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
          state.total -= item.price;
        }
      }
    );
});
