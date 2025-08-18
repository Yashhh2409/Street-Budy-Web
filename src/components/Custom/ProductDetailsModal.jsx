"use client";

import { AuthContext } from "@/context/AuthContext";
import { CartContext } from "@/context/CartContext";
import { MyAppContext } from "@/context/MyAppContext";
import {
  faMinus,
  faPlus,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductDetailsModal = ({ isVisible, onClose, Item }) => {
  const { Currency, price, fetchProductConfig } = useContext(MyAppContext);
  const { cartItems, addToCart, updateCart } = useContext(CartContext);

  const [config, setConfig] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);

  console.log("selectedOption", selectedOption);
  console.log("selectedAddons", selectedAddons);
  

  const cartItem = cartItems.find((c) => c.product_id === Item?.id);
  const quantity = cartItem ? cartItem.quantity : 1;

  const [tempQuantity, setTempQuantity] = useState(quantity);

  useEffect(() => {
    setTempQuantity(quantity);
  }, [quantity]);

  useEffect(() => {
    console.log("Item:", Item);
  });

  // Reset options, addons when new product is selected
  useEffect(() => {
    if (Item) {
      setSelectedOption(null);
      setSelectedAddons([]);
      setTempQuantity(1);
    }
  }, [Item?.id])

  const handleIncrease = () => {
    setTempQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setTempQuantity((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  useEffect(() => {
    if (Item?.id) {
      fetchProductConfig(Item.id).then((data) => {
        setConfig(data);
      });
    }
  }, [Item, Item?.id]);

  // sizes radio button 
  const handleOptionChange = (opt_val) => {
    setSelectedOption(opt_val);
  }

  // selected addons 
  const handleAddonChange = (addon) => {
    setSelectedAddons((prev) => {
      if(prev.includes(addon)) {
        return prev.filter((a) => a !== addon);
      } else {
        return [...prev, addon]
      }
    })
  }

  // calculate Normal total price
  // const calculateOriginalTotal = () => {
  //   let optionTotal = selectedOption ? selectedOption.price : 0;
  //   let addonsTotal = selectedAddons.reduce((sum, addon) => sum + addon.price, 0);
  //   return (basePrice + addonsTotal) * tempQuantity;
  // }

  const calculateOriginalTotal = () => {
     let basePrice = Number(Item?.normal_price);
    let optionTotal = selectedOption ? selectedOption.price : 0;
    let addonsTotal = selectedAddons.reduce((sum, addon) => sum + Number(addon.addon_price), 0);
    let total = (basePrice + optionTotal + addonsTotal) * tempQuantity;
      console.log("Base:", basePrice, "Option:", optionTotal, "Addons:", addonsTotal, "Qty:", tempQuantity, "Total:", total);
    return Number(total.toFixed(2));
  }

  const calculateTotal = () => {
    let basePrice = Number(price(Item?.id));
    let optionTotal = selectedOption ? selectedOption.price : 0;
    let addonsTotal = selectedAddons.reduce((sum, addon) => sum + Number(addon.addon_price), 0);
    let total = (basePrice + optionTotal + addonsTotal) * tempQuantity;
      console.log("Base:", basePrice, "Option:", optionTotal, "Addons:", addonsTotal, "Qty:", tempQuantity, "Total:", total);
    return Number(total.toFixed(2));
  }

  if (!isVisible) return null;
  return (
    <div className="fixed bottom-0 md:inset-0 md:bg-black/25 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative mb-12 flex flex-col gap-4 w-full bg-white md:w-[500px]  p-4 rounded-t-2xl   md:rounded-2xl z-50 md:z-0">
        <div className="h-[400px] overflow-y-auto">
          <div className="flex gap-2 items-center">
            <div className="relative w-[100px] md:w-[120px] h-[100px] md:h-[120px] overflow-hidden bg-red-800 rounded-2xl">
              <Image
                src={Item?.img}
                alt="img"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-2xl"
              />
              <p className="absolute text-sm bottom-0 text-white font-bold px-2 bg-gradient-to-r from-black to-transparent">
                {Item?.discount}% OFF
              </p>
            </div>
            <div>
              <p className="font-bold">{Item?.product_name}</p>
              <p className="text-orange-500 text-sm">{Item?.store_name}</p>
              <div className="flex gap-1 text-sm text-gray-500 items-center">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <p>(0)</p>
              </div>
              <span className="flex gap-2">
                <p className="text-gray-500 line-through">
                  {Item?.normal_price}
                </p>
                <p>{price(Item?.id)}</p>
              </span>
            </div>
          </div>

          <div>
            <div className="flex flex-col justify-between py-2">
              <div className="flex justify-between mb-1">
                <p className="text-gray-800 font-bold">Description</p>
                <div className="w-fit flex items-center gap-1 border-amber-600 shadow-xl px-2 rounded-full">
                  {Item?.isVeg ? (
                    <div className="green-veg-icon-border">
                      <div className="green-veg-icon-dot"></div>
                    </div>
                  ) : (
                    <div className="red-non-veg-icon-border">
                      <div className="red-non-veg-icon-dot"></div>
                    </div>
                  )}
                  <div>{Item?.isVeg}</div>
                  <p className="text-sm">{Item?.isVeg ? "Veg" : "Non-Veg"}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                {Item?.Description ||
                  "If your are looking for good food near by your area street buddy is the only option you have!"}
              </p>
            </div>
            {config && (
              <div className="flex flex-col gap-2 bg-gray-100 rounded-xl py-4 px-2">
                {/* Options */}
                {config?.options && config.options.length > 0 && (
                  <div className="flex flex-col gap-2 py-2">
                    {config.options.map((opt, index) => (
                      <>
                        <p className="text-gray-800 font-bold">
                          {opt.option_name}
                        </p>
                        {JSON.parse(opt.option_values).map((opt_val) => (
                          <label
                            key={index}
                            className="flex items-center justify-between p-2 rounded cursor-pointer bg-gray-50"
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="option"
                                value={opt_val.name}
                                checked={selectedOption?.name === opt_val.name}
                                onChange={() => handleOptionChange(opt_val)}
                              />
                              <span>{opt_val.name}</span>
                            </div>
                            <p>
                              {Currency} {opt_val.price}
                            </p>
                          </label>
                        ))}
                      </>
                    ))}
                  </div>
                )}

                {/* Addons */}
                {config?.addons && config.addons.length > 0 && (
                  <div className="flex flex-col gap-2 py-2">
                    <p className="text-gray-800 font-bold">Addons</p>
                    {config.addons.map((addon, index) => (
                      <label
                        key={index}
                        className="flex items-center justify-between p-2 rounded cursor-pointer bg-gray-50"
                      >
                        <div className="flex items-center gap-2">
                          <input type="checkbox" value={addon.addon_name} checked={selectedAddons.includes(addon)} onChange={() => handleAddonChange(addon)} />
                          <span>{addon.addon_name}</span>
                        </div>
                        <p>
                          {Currency} {addon.addon_price}
                        </p>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <FontAwesomeIcon
          icon={faXmark}
          onClick={onClose}
          className="absolute w-4 h-4 right-2 top-2 bg-white shadow-lg border-2 border-orange-500 p-2 rounded-full cursor-pointer"
        />

        <div className="flex justify-between">
          <p className="text-orange-500 font-bold">Total Amount:</p>
          <span className="flex gap-2">
            {/* <p className="line-through text-gray-500">{Currency} {calculateTotal()}</p> */}
            <p className="line-through text-gray-500">{Currency} {calculateOriginalTotal().toFixed(2)}</p>
            {/* <p className="text-orange-500 font-bold">{Currency} {price(Item?.id)}</p> */}
            <p className="text-orange-500 font-bold">{Currency} {calculateTotal().toFixed(2)}</p>
          </span>
        </div>

        {/* Quantity Selector & Add button  */}
        <div className="flex gap-2">
          <div className="flex gap-2 items-center">
            <div onClick={handleDecrease} className="cursor-pointer">
              <FontAwesomeIcon
                icon={faMinus}
                width={10}
                height={10}
                className="w-4 h-4 border-[2px] border-gray-500 rounded-full"
              />
            </div>
            <p>{tempQuantity}</p>
            <div onClick={handleIncrease} className="cursor-pointer">
              <FontAwesomeIcon
                icon={faPlus}
                width={10}
                height={10}
                className="w-4 h-4 border-[2px] border-gray-500 rounded-full"
              />
            </div>
          </div>

          <button
            onClick={() => {
              addToCart(
                {
                  id: Item.id,
                  product_title: Item.product_name,
                  price: Item.normal_price,
                  product_img: Item.img,
                  option_values: Item.option_values,
                  store_name: Item.store_name,
                  store_id: Item.store_id,
                  discount: Item.discount,
                },
                tempQuantity
              );
              toast.success(
                `${quantity > 1 ? "Cart Updated" : "Added To Cart"}`
              );
              onClose();
            }}
            className="w-full bg-orange-500 rounded-full py-1 text-white font-bold cursor-pointer"
          >
            {quantity > 1 ? "Update Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
