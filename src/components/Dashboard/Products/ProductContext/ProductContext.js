import React, { createContext, useState } from "react";
import products from "..";

export const ProductContext = createContext();
const initialProducts = products;
  
export const ProductProvider = ({ children }) => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [bagCount, setBagCount] = useState(0);
    const [boxCount, setBoxCount] = useState(0);
    const [products, setProducts] = useState(initialProducts);
    const updateProductQuantity = (productId, quantity) => {
        setProducts(prevProducts =>
          prevProducts.map(product =>
            product.id === productId
              ? { ...product, quantity: product.quantity - quantity }
              : product
          )
        );
      };
    return (
        <ProductContext.Provider value={{products, updateProductQuantity , totalQuantity, setTotalQuantity, totalPrice, setTotalPrice,bagCount, setBagCount, 
            boxCount, setBoxCount }}>
            {children}
        </ProductContext.Provider>
    );
};

