"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { MyAppContext } from "./MyAppContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { formatImagePaths } = useContext(MyAppContext);

  const [cartItems, setCartItems] = useState([]);

  // if user loogedin cartItems has user cart if not then cartItems from localstorage

  // Handle fetching cart
  useEffect(() => {
    const syncCart = async () => {
      if (user) {
        // Get DB cart
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cart/getcart?uid=${user.id}`
          );
          const data = await res.json();
          const updateData = formatImagePaths(data);
          setCartItems(updateData);
        } catch (error) {
          console.error("Error fetching DB cart:", error);
        }

        // Check if localStorage cart exists (guest cart)
        const localStorageCart = localStorage.getItem("cart");
        if (localStorageCart) {
          const items = JSON.parse(localStorageCart);

          try {
            await fetch(
              `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cart/merge`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ uid: user.id, items }),
              }
            );

            // Clear guest cart after merging
            localStorage.removeItem("cart");

            // Refresh merged DB cart
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cart/getcart?uid=${user.id}`
            );
            const mergedData = await res.json();
            setCartItems(formatImagePaths(mergedData));
          } catch (error) {
            console.error("Error merging cart:", error);
          }
        }
      } else {
        // No user load guest cart from localStorage
        const localStorageItem = localStorage.getItem("cart");
        if (localStorageItem) {
          setCartItems(JSON.parse(localStorageItem));
        } else {
          setCartItems([]);
        }
      }
    };

    syncCart();
  }, [user]);

  console.log("CartItems:", cartItems);

  const addToCart = async (product, selectedQuantity = 1) => {
    if (!user) {
      // guest user logic
      let updatedCart = [...cartItems];
      const existing = updatedCart.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += selectedQuantity;
      } else {
        updatedCart.push({ ...product, quantity: selectedQuantity });
      }

      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      console.log("Updated Guest Cart:", updatedCart);
    } else {
      // logged in user logic
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cart/add`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uid: user.id,
            store_id: product.store_id || "",
            product_id: product.id,
            attribute_id: product.attribute_id || 0,
            quantity: selectedQuantity,
            price: product.price,
            product_title: product.product_title,
            product_img: product.product_img,
          }),
        });

        // Fetch updated DB cart
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cart/getcart?uid=${user.id}`
        );

        const data = await res.json();
        const updateData = formatImagePaths(data);
        setCartItems(updateData);
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };

  const updateCart = async (productId, action) => {
    if (!user) {
      // guest user Only local update
      let updatedCart = [...cartItems];
      if (action === "increase") {
        updatedCart = updatedCart.map((item) =>
          item.product_id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else if (action === "decrease") {
        updatedCart = updatedCart.map((item) =>
          item.product_id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else if (action === "delete") {
        updatedCart = updatedCart.filter(
          (item) => item.product_id !== productId
        );
      }
      setCartItems(updatedCart);
      return;
    }

    // Logged in case optimistic update + API sync
    let updatedCart = [...cartItems];
    if (action === "increase") {
      updatedCart = updatedCart.map((item) =>
        item.product_id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else if (action === "decrease") {
      updatedCart = updatedCart.map((item) =>
        item.product_id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    } else if (action === "delete") {
      updatedCart = updatedCart.filter((item) => item.product_id !== productId);
    }
    setCartItems(updatedCart);

    try {
      const res = await fetch("/api/cart/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid: user.id, product_id: productId, action }),
      });

      const data = await res.json();
      if (data.success) {
        setCartItems(formatImagePaths(data.cart)); // confirm with DB
      }
    } catch (error) {
      console.error("Cart update failed:", error);
    }
  };

  const cartCount = cartItems.length;

  // const getDiscountedPrice = (price, discount) => {
  //   if (!discount) return price;
  //   return price - (price * discount) / 100;
  // }

  // const calculateItemTotal = (item, quantity)

  const value = { addToCart, cartItems, setCartItems, cartCount, updateCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
