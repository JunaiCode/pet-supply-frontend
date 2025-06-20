import { createAction } from "@reduxjs/toolkit";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "@/types/products/product.types";
import { Product } from "../reducers/cartReducer";

export const addToCart = createAction<Product>(ADD_TO_CART);

export const delFromCart = (all = false, id: string) => {
  return all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };
};

export const clearCart = createAction(CLEAR_CART);
