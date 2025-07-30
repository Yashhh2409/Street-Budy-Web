"use client";

import { createContext, useContext, useEffect, useState } from "react";

import CountryList from "country-list-with-dial-code-and-flag";

export const MyAppContext = createContext();

export const MyAppProvider = ({ children }) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [mcatList, setmcatList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [productAttributes, setProductAttributes] = useState([]);
  const [showBar, setShowBar] = useState(true);
  const [countries, setCountry] = useState([]);

  const Currency = "₹";

  // useEffect(() => {
  //   const countriesData = emojiFlags.data.map((country) => ({
  //     name: country.name,
  //     code: country.code,
  //     dialCode: country.dial_code,
  //     image: `https://flagcdn.com/w40/${country.code.toLowerCase()}.png`
  //   }));

  //   setCountry(countriesData);
  // }, []);

  useEffect(() => {
    const countriesData = CountryList.getAll()

    const filteredCountries = countriesData.map((c) => ({
      name: c.name,
      dialCode: c.dial_code,
      image: `https://flagcdn.com/w40/${c.code.toLowerCase()}.png`
    }))

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

  // Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`
        );

        const data = await response.json();

        const updatedData = formatImagePaths(data);

        setProductList(updatedData);
      } catch (error) {
        console.error("Could'nt fetch products", error);
      }
    };

    fetchProducts();
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

  const value = {
    Currency,
    formatImagePaths,
    restaurantList,
    mcatList,
    productList,
    productAttributes,
    showBar,
    setShowBar,
    countries,
  };

  return (
    <MyAppContext.Provider value={value}>{children}</MyAppContext.Provider>
  );
};

export const useMyAppContext = () => useContext(MyAppContext);
