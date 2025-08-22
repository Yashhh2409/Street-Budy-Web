"use client";

import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faCircleChevronDown,
  faCircleChevronUp,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import DesktopHeader from "@/components/DesktopHeader";
import AppDownloadBar from "@/components/Custom/AppDownloadBar";
import Image from "next/image";
import { MyAppContext } from "@/context/MyAppContext";
import Footer from "@/components/Footer";
import { CartContext } from "@/context/CartContext";
import ProductDetailsModal from "@/components/Custom/ProductDetailsModal";
import useBodyScrollLock from "@/components/Custom/useBodyScrollLock";
import { useRouter } from "next/navigation";
import SignIn from "@/components/Custom/SignIn";

const DeliveryOptions = [
  {
    id: "1",
    name: "Home Delivery",
    Charge: "10",
  },
  {
    id: "2",
    name: "Take Away",
    Charge: "Free",
  },
];

const DeliveryManTips = [
  {
    id: "1",
    charges: "Not Now",
  },
  {
    id: "2",
    charges: "15",
  },
  {
    id: "3",
    charges: "10",
  },
  {
    id: "4",
    charges: "20",
  },
  {
    id: "5",
    charges: "40",
  },
  {
    id: "6",
    charges: "Custom",
  },
];

const page = () => {
  // const isMobile = useMediaQuery("(max-width: 767px)");

  const { showBar } = useContext(MyAppContext);

  const [isSummaryOpen, setSummaryOpen] = useState(true);
  const [selectedCartItem, setSelectedCartItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useBodyScrollLock(showModal);

  const router = useRouter();

  const { Currency, products } = useContext(MyAppContext);

  const { user } = useContext(MyAppContext);

  const { cartItems, updateCart, calculateCartSummary, cartCount } =
    useContext(CartContext);

  const totals = calculateCartSummary(cartItems, products);

  console.log("CartItems in cart page:", cartItems);

  const handleOrderSummary = () => {
    setSummaryOpen((prev) => !prev);
  };

  const getProductFromCartItem = (cartItem, products) => {
    const product = products.find((p) => p.id === cartItem.product_id);

    if (!product) return null;

    return {
      ...product,
      quantity: cartItem.quantity,
      variations: cartItem.variation,
    };
  };

  return (
    <>
      <div className={`block md:hidden ${showBar ? "pb-8" : "pb-0"} `}>
        <AppDownloadBar />
      </div>

      <div className="hidden md:block">
        <DesktopHeader />
      </div>

      <div className={`block md:hidden`}>
        <AppDownloadBar />
      </div>

      <div className="w-full flex flex-col gap-2 mt-6">
        <div className="block md:hidden">
          <div
            className={`fixed ${
              showBar ? "top-13" : "top-0"
            } overflow-hidden flex items-center justify-center gap-4 px-4 w-full h-[50px] bg-white z-50`}
          >
            <Link href={"/"}>
              <FontAwesomeIcon icon={faChevronLeft} className="w-8 h-8" />
            </Link>
            <p className="w-full mr-8 text-center py-3 font-bold">Cart</p>
          </div>
        </div>

        <div className="hidden md:block">
          <p className="text-center bg-white py-3 font-bold">Cart</p>
        </div>

        <div
          className={` ${
            showBar
              ? "mt-12 md:mt-0 mb-32 md:mb-10"
              : "mt-6 md:mt-0 mb-32 md:mb-0"
          }  w-full px-4 py-1 md:px-48 flex flex-col md:flex-row items-start justify-between gap-1 `}
        >
          <div className="w-full md:w-3/5 p-1 flex flex-col gap-2">
            {cartItems.map((item) => (
              <div
                onClick={() => {
                  const productData = getProductFromCartItem(item, products);
                  console.log("prod data ---> ", productData);

                  setSelectedCartItem(productData);
                  setShowModal(true);
                }}
                key={item.id}
                className="bg-white w-full py-4 rounded-lg flex items-center justify-between px-4 hover:bg-red-50 transition-colors duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[70px] h-[70px] rounded-md overflow-hidden">
                    <Image
                      src={item.product_img || "/assets/square_placeholder.png"}
                      width={35}
                      height={35}
                      className="w-full h-full object-cover rounded-md"
                      alt={item.product_title}
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-bold">{item.product_title}</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-bold">
                        {" "}
                        {Currency} {item.price}
                      </p>
                      <p className="text-gray-400 line-through">
                        {Currency} {item.price}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      updateCart(item.product_id, "decrease");
                    }}
                    className="border-2 w-5 h-5 rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faMinus} className="text-xs" />
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      updateCart(item.product_id, "increase");
                    }}
                    className="border-2 w-5 h-5 rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faPlus} className="text-xs" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      updateCart(item.product_id, "delete");
                    }}
                    className="w-5 h-5 flex items-center justify-center ml-5 hover:text-red-500 transition-colors duration-300 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faTrash} className="text-lg" />
                  </button>
                </div>
              </div>
            ))}

            <div className="w-fit mx-auto text-orange-500 px-3 py-1 hover:bg-orange-100 rounded-full transition-colors duration-300 cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border-2 p-2 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-md font-bold"
                  />
                </div>
                <button className="text-md font-bold cursor-pointer">
                  Add more items
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/5">
            <div className="bg-white rounded-lg p-4">
              <span
                onClick={handleOrderSummary}
                className="flex items-center justify-between py-3 cursor-pointer"
              >
                <p className="font-bold">Order Summary</p>

                {isSummaryOpen ? (
                  <FontAwesomeIcon
                    icon={faCircleChevronDown}
                    className="text-lg"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCircleChevronUp}
                    onClick={handleOrderSummary}
                    className="text-lg"
                  />
                )}
              </span>
              <hr />

              {isSummaryOpen && (
                <div>
                  <span className="py-2 flex items-center justify-between">
                    <p>Items Price</p>
                    <p>
                      {Currency} {totals.itemsTotal}
                    </p>
                  </span>

                  {totals.optionsTotal > 0 && (
                    <span className="py-2 flex items-center justify-between">
                      <p>Variations</p>
                      <p>
                        (+) {Currency} {totals.optionsTotal}
                      </p>
                    </span>
                  )}

                  <span className="py-2 flex items-center justify-between">
                    <p>Discount</p>
                    <p>
                      (-) {Currency} {totals.discountTotal}
                    </p>
                  </span>

                  {totals.addonsTotal > 0 && (
                    <span className="py-2 flex items-center justify-between">
                      <p>Addons</p>
                      <p>
                        (+) {Currency} {totals.addonsTotal}
                      </p>
                    </span>
                  )}
                </div>
              )}

              <hr />

              <div className="text-sm font-bold text-gray-600 mt-4">
                I have read and agreed with{" "}
                <Link href="" className="text-orange-500">
                  Privacy Policy
                </Link>
                ,{" "}
                <Link href="" className="text-orange-500">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link href="" className="text-orange-500">
                  Refund Policy
                </Link>
              </div>

              {/* desktop  */}
              <div className="hidden md:block">
                <span className="flex items-center justify-between text-lg text-orange-500 py-3 font-bold">
                  <p>Total Amount</p>
                  <p>
                    {Currency} {totals.finalTotal}
                  </p>
                </span>

                <button
                  onClick={() => router.push("/checkout")}
                  className={`w-full ${
                    cartCount > 0 ? "bg-orange-500" : "bg-gray-500"
                  }  rounded-md text-white tracking-wider py-1.5 font-bold cursor-pointer`}
                >
                  Confirm Delivery Details
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile  */}
        <div className="w-full py-4 bg-white block md:hidden fixed bottom-0 px-4">
          <span className="flex items-center justify-between text-lg text-orange-500 py-3 font-bold">
            <p>Total Amount</p>
            <p>
              {Currency} {totals.finalTotal}
            </p>
          </span>

          <button
            onClick={() => router.push("/checkout")}
            className={`w-full ${
              cartCount > 0 ? "bg-orange-500" : "bg-gray-500"
            }  rounded-md text-white tracking-wider py-1.5 font-bold cursor-pointer`}
          >
            Confirm Delivery Details
          </button>
        </div>

        <ProductDetailsModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          Item={selectedCartItem}
        />
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
    </>
  );
};

export default page;
