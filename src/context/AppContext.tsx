import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Accessory, Car, CartItem } from '../types';

interface AppContextType {
  wishlist: Car[];
  compareList: Car[];
  addToWishlist: (car: Car) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  addToCompare: (car: Car) => void;
  removeFromCompare: (id: string) => void;
  isInCompare: (id: string) => boolean;
  cart: CartItem[];
  addToCart: (product: Accessory | Car) => void;
  removeFromCart: (id: string) => void;
  updateCartQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<Car[]>([]);
  const [compareList, setCompareList] = useState<Car[]>([]);
  const [cart, setCart] = useState<CartItem[]>(() => {
    try { const savedCart = localStorage.getItem('tungauto-cart'); return savedCart ? JSON.parse(savedCart) as CartItem[] : []; }
    catch { return []; }
  });
  useEffect(() => { localStorage.setItem('tungauto-cart', JSON.stringify(cart)); }, [cart]);
  const addToCart = (product: Accessory | Car) => setCart(current => {
    const existing = current.find(item => item.product.id === product.id);
    return existing ? current.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { product, quantity: 1 }];
  });
  const removeFromCart = (id: string) => setCart(current => current.filter(item => item.product.id !== id));
  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return removeFromCart(id);
    setCart(current => current.map(item => item.product.id === id ? { ...item, quantity } : item));
  };
  const clearCart = () => setCart([]);

  const addToWishlist = (car: Car) => {
    if (!wishlist.find(c => c.id === car.id)) {
      setWishlist([...wishlist, car]);
    }
  };

  const removeFromWishlist = (id: string) => {
    setWishlist(wishlist.filter(c => c.id !== id));
  };

  const isInWishlist = (id: string) => {
    return wishlist.some(c => c.id === id);
  };

  const addToCompare = (car: Car) => {
    if (compareList.length < 3 && !compareList.find(c => c.id === car.id)) {
      setCompareList([...compareList, car]);
    } else if (compareList.length >= 3) {
      alert('You can only compare up to 3 cars at a time.');
    }
  };

  const removeFromCompare = (id: string) => {
    setCompareList(compareList.filter(c => c.id !== id));
  };

  const isInCompare = (id: string) => {
    return compareList.some(c => c.id === id);
  };

  return (
    <AppContext.Provider
      value={{
        wishlist,
        compareList,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        addToCompare,
        removeFromCompare,
        isInCompare,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
