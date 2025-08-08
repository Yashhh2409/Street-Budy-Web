"use client";

import { createContext, useContext, useEffect, useState } from "react";

import CountryList from "country-list-with-dial-code-and-flag";
import { AuthContext } from "./AuthContext";

export const MyAppContext = createContext();

export const MyAppProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  const [prevCartData, setPrevCartData] = useState([]);
  const [userCartItems, setUserCartItems] = useState([]);
  const [cartItems, setCartItems] = useState({});

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
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cart/prevcartdata`
        );

        const data = await response.json();
        setPrevCartData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartData();
  }, []);

  console.log("User in app context is:", user);
  console.log("prev cartdata context is:", prevCartData);

  // userCartItems
  useEffect(() => {
    if (user && prevCartData.length > 0) {
      const userCart = prevCartData.filter(
        (item) => Number(item.uid) === user.id
      );
      console.log("Matched cart for user:", userCart);
      setUserCartItems(userCart);
    }
  }, [user, prevCartData]);

const addToCart = async (product) => {
  if (!user) {
    alert("Login first");
    return;
  }

 const newItem = {
  uid: user.id,
  product_id: product.id,
  product_title: product.product_name,
  price: product.normal_price,
  product_img: product.img,
  store_id: product.store_id || 1,              // Optional fallback
  attribute_id: product.attribute_id || 0,      // Optional, if variations like veg/spicy are used
  cart_type: "normal",                          // Could be 'subscription' later
  variation: null,                              // To be set if user selects size, etc.
  visible: 1,
  subscription_data: null,                      // Required only for subscription carts
  quantity: 1,
};

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cart/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    console.log("✅ Cart item saved to DB:", data);
  } catch (err) {
    console.error("❌ Cart add error:", err.message);
  }
};



  console.log("updated Cart data:", cartItems);

  const value = {
    Currency,
    formatImagePaths,
    restaurantList,
    mcatList,
    productList,
    products,
    cartItems,
    productAttributes,
    showBar,
    setShowBar,
    countries,
    price,
    addToCart,
  };

  return (
    <MyAppContext.Provider value={value}>{children}</MyAppContext.Provider>
  );
};

export const useMyAppContext = () => useContext(MyAppContext);
