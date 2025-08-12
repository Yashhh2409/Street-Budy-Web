"use client";

import { createContext, useContext, useEffect, useState } from "react";

import CountryList from "country-list-with-dial-code-and-flag";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";

export const MyAppContext = createContext();

export const MyAppProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  const [prevCartData, setPrevCartData] = useState([]);
  const [userCartItems, setUserCartItems] = useState([]);
  const [fetchedCartItems, setFetchedCartItems] = useState([]);

  const [restaurantList, setRestaurantList] = useState([]);
  const [mcatList, setmcatList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [productAttributes, setProductAttributes] = useState([]);
  const [showBar, setShowBar] = useState(true);
  const [countries, setCountry] = useState([]);

  const Currency = "₹";

  // price
  const price = (Pid) => {
    const FoundProduct = products.find((p) => p.id === Pid);

    if (FoundProduct) {
      const percent = (FoundProduct.normal_price * FoundProduct.discount) / 100;

      const FinalPrice = FoundProduct.normal_price - percent;

      return FinalPrice.toFixed(2);
    }
  };

  // price2
  const price2 = (Pid) => {
    const FoundProduct = userCartItems.find((p) => p.id === Pid);

    if (FoundProduct) {
      const percent = (FoundProduct.price * FoundProduct.discount) / 100;

      const FinalPrice = FoundProduct.price - percent;

      return FinalPrice.toFixed(2);
    }
  };
  // countries data
  useEffect(() => {
    const countriesData = CountryList.getAll();

    const filteredCountries = countriesData.map((c) => ({
      name: c.name,
      dialCode: c.dial_code,
      image: `https://flagcdn.com/w40/${c.code.toLowerCase()}.png`,
    }));

    setCountry(filteredCountries);
  }, []);

  const formatImagePaths = (data) => {
    return data.map((item) => ({
      ...item,
      cover_img: item.cover_img
        ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${
            item.cover_img.startsWith("/") ? "" : "/"
          }${item.cover_img}`
        : null,
      rimg: item.rimg
        ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${
            item.rimg.startsWith("/") ? "" : "/"
          }${item.rimg}`
        : null,
      img: item.img
        ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${
            item.img.startsWith("/") ? "" : "/"
          }${item.img}`
        : null,
      product_img: item.product_img
        ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${
            item.product_img.startsWith("/") ? "" : "/"
          }${item.product_img}`
        : null,
    }));
  };

  // Restaurants
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/restaurants`
        );
        const data = await response.json();

        const updatedData = formatImagePaths(data);

        setRestaurantList(updatedData);
      } catch (error) {
        console.error("Failed to fetch restaurants", error);
      }
    };

    fetchRestaurants();
  }, []);

  // Main categories
  useEffect(() => {
    const fetchMainCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/mcat`
        );
        const data = await response.json();

        setmcatList(data);
      } catch (error) {
        console.error("couldn't fetch mcats", error);
      }
    };

    fetchMainCategories();
  }, []);

  // All Products
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/allproducts`
        );
        const data = await res.json();

        const updatedData = formatImagePaths(data);

        setProducts(updatedData);
      } catch (error) {
        console.error("Could'nt fetch products", error);
      }
    };

    getAllProducts();
  }, []);

  //Products Attribute
  useEffect(() => {
    const fetchAttributes = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product-attribute`
        );
        const data = await response.json();
        setProductAttributes(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAttributes();
  }, []);

  // Prev Cart data of all users
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cart/prevcartdata?user_id=${user?.id}`
        );

        const data = await response.json();

        const updatedData = formatImagePaths(data);
        if (updatedData) {
          setPrevCartData(updatedData);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartData();
  }, []);

  console.log("Logged in User:", user);
  console.log("Logged in User id:", user?.id);
  console.log("userCartItems gjnkhj:", userCartItems);
  console.log("prev cart data:", prevCartData);

  // userCartItems
  useEffect(() => {
    if (user && prevCartData.length > 0) {
      const userCart = prevCartData.filter(
        (item) => Number(item.uid) === user.id
      );

      const updatedCart = formatImagePaths(userCart);
      console.log("Matched cart for user:", userCart);
      setUserCartItems(updatedCart);
    }
  }, [user, prevCartData]);

  //updated fetched cart items
  useEffect(() => {
    if (!user?.id) {
      return;
    }

    const fetchCart = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cart/getcart?uid=${user?.id}`
        );

        if (!res.ok) throw new Error("Failed to fetch cart");
        const data = await res.json();
        const updateData = formatImagePaths(data);
        setFetchedCartItems(updateData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCart();
  }, [user]);

  const addToCart = async (product) => {
    const productId = product.id;

    const existing = userCartItems.find(
      (item) => item.product_id === productId
    );

    if (existing) {
      const updatedCart = userCartItems.map((item) =>
        item.product_id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setUserCartItems(updatedCart);

      // sending data to backend route
      try {
        await fetch("/api/cart/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...existing,
            quantity: existing.quantity + 1,
            uid: user?.id,
          }),
        });
      } catch (error) {
        console.error("Error updating cart on server:", error);
      }
    } else {
      const newItem = {
        product_id: productId,
        product_title: product.product_title || product.product_name,
        product_img: [product][0].product_img,
        price: product.price,
        quantity: 1,
        option_values: product.option_values || null,
        store_id: product.store_id,
        store_name: product.store_name,
        discount: product.discount || 0,
        cart_type: "normal",
        variation: null,
        visible: 1,
        subscription_data: "",
      };

      setUserCartItems([...userCartItems, newItem]);

      try {
        await fetch("/api/cart/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...newItem,
            uid: user?.id,
          }),
        });
      } catch (error) {
        console.error("Error saving cart to server:", error);
      }
    }
  };

  useEffect(() => {
    console.log("User Cart Items:", userCartItems);
  }, [userCartItems]);

  useEffect(() => {
    console.log("Fetchedd Cart Items:", fetchedCartItems);
  }, [fetchedCartItems]);

  const cartCount = userCartItems.reduce((acc, item) => acc + item.quantity, 0);

  const updateCart = async (product_id, action) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cart/update`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          uid: user?.id,
          product_id,
          action
        })
      })

      const data = await res.json();
      console.log("updated cart:", data.cart);
      
    } catch (error) {
      console.error(error);
    }
  }

  const value = {
    Currency,
    formatImagePaths,
    restaurantList,
    mcatList,
    productList,
    products,
    userCartItems,
    productAttributes,
    showBar,
    setShowBar,
    countries,
    price,
    price2,
    addToCart,
    cartCount,
    fetchedCartItems,
    updateCart
  };

  return (
    <MyAppContext.Provider value={value}>{children}</MyAppContext.Provider>
  );
};

export const useMyAppContext = () => useContext(MyAppContext);
