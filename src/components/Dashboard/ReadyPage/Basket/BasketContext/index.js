import React, { createContext, useContext, useState, useEffect } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [, setOriginalStock] = useState([]);
  const [cartCount, setCartCount] = useState(0); 

  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
    
    setOriginalStock((prevStock) => {
      const stockItem = prevStock.find(item => item.id === product.id);
      if (stockItem) {
        return prevStock.map(item =>
          item.id === product.id
            ? { ...item, quantity: stockItem.quantity - quantity }
            : item
        );
      } else {
        return [...prevStock, { id: product.id, quantity: product.quantity - quantity }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const productToRemove = prevCart.find(item => item.id === id);
      if (productToRemove) {
        setOriginalStock((prevStock) =>
          prevStock.map(item =>
            item.id === id
              ? { ...item, quantity: item.quantity + productToRemove.quantity }
              : item
          )
        );
      }
      return prevCart.filter((item) => item.id !== id);
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    cart.forEach(item => {
      setOriginalStock((prevStock) =>
        prevStock.map(stockItem =>
          stockItem.id === item.id
            ? { ...stockItem, quantity: stockItem.quantity + item.quantity }
            : stockItem
        )
      );
    });
    setCart([]); 
  };

  return (
    <BasketContext.Provider value={{ cart, cartCount, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </BasketContext.Provider>
  );
  
};

export const useCart = () => useContext(BasketContext);
