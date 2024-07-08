import React, { createContext, useState, ReactNode, useEffect } from 'react';

// Definiciones de tipo
export interface CartItem {
  id: number;
  title: string;
  price: number;
  amount: number;
  image: string;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
  removeFromCart: (id: number) => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
  total: number;
  itemAmount: number;
}

// Crea el contexto
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Proveedor del contexto
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.amount, 0);
    const newItemAmount = cart.reduce((acc, item) => acc + item.amount, 0);
    setTotal(newTotal);
    setItemAmount(newItemAmount);
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, amount: cartItem.amount + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, amount: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const increaseAmount = (id: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const decreaseAmount = (id: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
    setItemAmount(0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart, increaseAmount, decreaseAmount, total, itemAmount }}>
      {children}
    </CartContext.Provider>
  );
};