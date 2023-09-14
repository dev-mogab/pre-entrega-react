import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [items, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("The product is already in your cart");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = items.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return items.some((prod) => prod.id === itemId);
  };

  const totalQuantity = items.reduce((acc, val) => acc + val.quantity, 0);

  const total = () =>
    items.reduce((acc, val) => acc + val.quantity * val.price, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, totalQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
