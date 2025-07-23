"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { IMAGE_BASE_URL, API_BASE_URL } from "@/utils/constant";

export const MyAppContext = createContext();

export const MyAppProvider = ({ children }) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [mcatList, setmcatList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [productAttributes, setProductAttributes] = useState([]);

  const Currency = "₹";

  const formatImagePaths = (data) => {
    return data.map((item) => ({
      ...item,
      cover_img: item.cover_img
        ? `${IMAGE_BASE_URL}${item.cover_img.startsWith("/") ? "" : "/"}${
            item.cover_img
          }`
        : null,
      rimg: item.rimg
        ? `${IMAGE_BASE_URL}${item.rimg.startsWith("/") ? "" : "/"}${item.rimg}`
        : null,
      img: item.img
        ? `${IMAGE_BASE_URL}${item.img.startsWith("/") ? "" : "/"}${item.img}`
        : null,
    }));
  };

  // Restaurants
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/restaurants`);
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
        const response = await fetch(`${API_BASE_URL}/api/mcat`);
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
        const response = await fetch(`${API_BASE_URL}/api/products`);

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
        const response = await fetch(`${API_BASE_URL}/api/product-attribute`);
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
  };

  return (
    <MyAppContext.Provider value={value}>{children}</MyAppContext.Provider>
  );
};

export const useMyAppContext = () => useContext(MyAppContext);
