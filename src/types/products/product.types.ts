/* eslint-disable @typescript-eslint/no-explicit-any */
export type ProductCardProps = {
  name: string;
  price: number;
  imageUrl: string;
};

//SHOPPING CART
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

export interface CartItem {
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export interface ProductCrud {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  imageUrls?: string[];
  inStock: boolean;
  quantity: number;
  specifications: Record<string, any>;
}

export interface Product {
  id: string;
  name: string;
  description: string
  price: number;
  imageUrls?: string[];
  quantity?: number;
}

export interface ShoppingState {
  products: Product[];
  cart: Product[];
  total: number;
}