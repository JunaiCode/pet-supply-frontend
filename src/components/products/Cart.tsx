'use client';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { FaShoppingCart } from 'react-icons/fa';
import { clearCart, delFromCart } from '@/store/actions/cartActions';
import { Button } from '../ui/button';

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const total = useSelector((state: RootState) => state.cart.total);

  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleCart}
        className="fixed right-6 bottom-6 z-50 bg-pink-600 text-white p-4 rounded-full shadow-lg hover:bg-pink-700"
        aria-label="Open Cart"
      >
        <FaShoppingCart className="text-xl" />
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-white text-pink-600 font-bold text-xs px-2 py-0.5 rounded-full">
            {cartItems.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-80 bg-white z-40 p-6 shadow-lg overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button onClick={toggleCart} className="text-gray-500 hover:text-gray-800 text-xl">&times;</button>
          </div>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex gap-3 items-center border-b pb-2">
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">x{item.quantity}</p>
                    <div className="flex gap-2 mt-1">
                      <button
                        onClick={() => dispatch(delFromCart(false, item.id))}
                        className="text-xs text-pink-600 hover:underline"
                      >
                        Remove one
                      </button>
                      <button
                        onClick={() => dispatch(delFromCart(true, item.id))}
                        className="text-xs text-red-500 hover:underline"
                      >
                        Remove All
                      </button>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-pink-600">
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </div>
                </li>
              ))}
              <li className="pt-4 font-bold text-right text-pink-700">
                Total: ${total.toFixed(2)}
              </li>
            </ul>
          )}

          <div className="mt-6 space-y-2">
            <Button 
              variant='primary'
              className="w-full">
              Checkout
            </Button>
            <Button
            variant='secondary'
            className='w-full'
              onClick={() => dispatch(clearCart())}
            >
              Clear Entire Cart
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
