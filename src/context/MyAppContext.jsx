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
  const [productConfig, setProductConfig] = useState({});

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

  // Product Config
  const fetchProductConfig = async (productId) => {
    try {
      if (productConfig[productId]) {
        return productConfig[productId];
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product-config?product_id=${productId}`
      );

      const data = await res.json();

      setProductConfig((prev) => ({
        ...prev,
        [productId]: data,
      }));

      return data;
    } catch (error) {
      console.error("Error fetching product config", error);
      return null;
    }
  };

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
    fetchedCartItems,
    fetchProductConfig,
  };

  return (
    <MyAppContext.Provider value={value}>{children}</MyAppContext.Provider>
  );
};

export const useMyAppContext = () => useContext(MyAppContext);
