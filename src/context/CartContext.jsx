"use client";
import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cartItems");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  //  Add to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });

    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      toast.success(`Increased quantity of ${product.name}`);
    } else {
      toast.success(`${product.name} added to cart!`);
    }
  };

  //  Remove from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.success("Item removed from cart");
  };

  //  Update quantity
  const updateQty = (id, qty) => {
    if (qty <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      toast.success("Item removed from cart");
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, qty } : item))
      );
      toast.success("Quantity updated");
    }
  };

  //  Checkout
  const checkout = () => {
    setCartItems([]);
    toast.success(" Order placed successfully!");
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQty,
        checkout,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
