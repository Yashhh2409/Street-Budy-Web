"use client";

import React, { useContext, useState } from "react";

import useMediaQuery from "@/hooks/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faCircleChevronDown,
  faCircleChevronUp,
  faEdit,
  faInfo,
  faWallet,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import DesktopHeader from "@/components/DesktopHeader";
import AppDownloadBar from "@/components/Custom/AppDownloadBar";
import Image from "next/image";
import { MyAppContext } from "@/context/MyAppContext";
import Footer from "@/components/Footer";

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
  const isMobile = useMediaQuery("(max-width: 767px)");

  const [selectedDelivery, setSelectedDelivery] = useState("Home Delivery");
  const [selectedDelTips, setSelectedDelTips] = useState("Not Now");
  const [isSummaryOpen, setSummaryOpen] = useState(true);

  const { Currency } = useContext(MyAppContext);

  const handleOrderSummary = () => {
    setSummaryOpen((prev) => !prev);
  };

  return (
    <>
      <div className="hidden md:block">
        <DesktopHeader />
      </div>

      <div className={`block md:hidden`}>
        <AppDownloadBar />
      </div>

      <div className="w-full flex flex-col gap-2 mt-6">
        {isMobile ? (
          <div className="flex items-center gap-4 px-4 w-full bg-[#F6E9E1]">
            <Link href={"/"}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
            <p className="w-full text-center py-3 font-bold">Checkout</p>
          </div>
        ) : (
          <p className="text-center bg-[#F6E9E1] py-3 font-bold">Checkout</p>
        )}
        <div className="w-full h-full md:px-48 flex items-start justify-between gap-1">
          <div className="w-3/5 p-1 flex flex-col gap-2">
            <div className="bg-white w-full py-4 rounded-lg flex items-center justify-between px-4">
              <div>
                <p className="font-bold">Wants to Unlock More Features?</p>
                <p className="text-sm text-orange-500 hover:bg-orange-100 w-fit px-2 rounded-full transition-colors duration-300 cursor-pointer">
                  Click here to login
                </p>
              </div>
              <div className="border-2 w-5 h-5 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faInfo} className="text-xs" />
              </div>
            </div>

            <div className="bg-white w-full py-4 rounded-lg px-4">
              <p className="font-bold mb-4">Delivery Option</p>

              <div className="flex items-center gap-4">
                {DeliveryOptions.map((del) => (
                  <div
                    key={del.id}
                    onClick={() => setSelectedDelivery(del.name)}
                    className={`border-[1px] w-fit p-2 rounded-md flex items-center justify-center gap-2 cursor-pointer ${
                      selectedDelivery === del.name
                        ? "border-orange-500 transition-colors duration-100"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      checked={selectedDelivery === del.name}
                      onChange={() => setSelectedDelivery(del.name)}
                      className="w-4 h-4 cursor-pointer accent-orange-600"
                    />
                    <div>
                      <p className="font-semibold">{del.name}</p>
                      <p className="text-sm">{del.Charge}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {selectedDelivery === "Home Delivery" ? (
              <>
                <div className="bg-white w-full py-4 rounded-lg px-4">
                  <p className="font-bold mb-4">Deliver To</p>

                  <div className="border-[1px] rounded-xl p-2 text-gray-300">
                    <div className="flex items-center justify-between p-2">
                      <div className="flex items-center gap-2 py-3 text-red-500 text-sm">
                        <p>No Contact Information Added</p>
                        <span className="w-4 h-4 border-[1px] border-transparent bg-red-500 text-white rounded-full flex items-center justify-center">
                          <FontAwesomeIcon
                            icon={faInfo}
                            className="text-[8px]"
                          />
                        </span>
                      </div>

                      <Link href={"/edit-address"}>
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="text-orange-500 cursor-pointer"
                        />
                        </Link>
                    </div>

                    <hr className="text-gray-300" />

                    <div className="p-2 py-3 text-gray-800">
                      <p>Q972+VPF, Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white w-full h-[110px] py-3 rounded-lg px-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <p className="font-bold ">Delivery Man Tips</p>
                      <div className="border-2 w-4 h-4 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={faInfo}
                          className="text-[8px] font-bold"
                        />
                      </div>
                    </div>
                    <span className="flex items-center gap-2">
                      <p>Save for later</p>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="w-4 h-4 text-gray-800"
                      />
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {selectedDelTips === "Custom" ? (
                      <div className="w-full flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="Enter Amount..."
                          className="w-full border-2 outline-none p-2 border-gray-300 rounded-md"
                        />
                        <div
                          onClick={() => setSelectedDelTips("Not Now")}
                          className="w-10 h-10 p-4 flex items-center justify-center rounded-full bg-orange-300"
                        >
                          <FontAwesomeIcon icon={faXmark} />
                        </div>
                      </div>
                    ) : (
                      <>
                        {DeliveryManTips.map((tip) => (
                          <div
                            onClick={() => setSelectedDelTips(tip.charges)}
                            className="relative"
                          >
                            <button
                              key={tip.id}
                              className={`${
                                selectedDelTips === tip.charges
                                  ? "bg-orange-500 text-white"
                                  : ""
                              } px-3 py-1 border-[2px] border-gray-300 rounded-md cursor-pointer`}
                            >
                              {isFinite(Number(tip.charges))
                                ? `${Currency} ${tip.charges}`
                                : `${tip.charges}`}
                            </button>

                            <div className="absolute text-[10px] tracking-wide text-orange-500 mt-1">
                              {tip.charges === "10" && (
                                <p className="text-nowrap">Most Tipped</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white w-full py-4 rounded-lg px-4">
                <p className="font-bold mb-4">Contact Information</p>

                <div className="border-[1px] rounded-xl px-3 py-5 border-gray-300 flex flex-col gap-3">
                  <div className="border-[1px] rounded-xl p-2 border-gray-300 px-4">
                    <input
                      type="text"
                      placeholder="Contact Person name"
                      className="outline-none"
                    />
                  </div>

                  <div className=" flex items-center gap-3 border-[1px] border-gray-300 px-4 py-2 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Image
                        src={"/assets/india-logo.png"}
                        width={25}
                        height={25}
                      />
                      <p>+91</p>
                    </div>

                    <hr className="h-[18px] border-[1px] bg-amber-400" />
                    <span className="relative">
                      <input
                        type="text"
                        placeholder="Phone"
                        name="mobile"
                        className="outline-none"
                        required
                      />
                    </span>
                  </div>

                  <div className="border-[1px] rounded-xl p-2 border-gray-300 px-4">
                    <input
                      type="text"
                      placeholder="E-mail"
                      className="outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white w-full py-3 rounded-lg px-4">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold ">Payment Method</p>
                <FontAwesomeIcon icon={faEdit} className="text-orange-500" />
              </div>

              <hr className="text-gray-300" />

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <FontAwesomeIcon icon={faWallet} className="" />
                  <p>Select Payment Method</p>
                  <span className="w-4 h-4 border-[1px] border-transparent bg-red-500 text-white rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faInfo} className="text-[8px]" />
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white w-full py-3 rounded-lg px-4">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold ">Additional Note</p>
                <FontAwesomeIcon icon={faEdit} className="text-orange-500" />
              </div>

              <div className="flex items-center justify-between py-2">
                <textarea
                  rows={3}
                  placeholder="Share any specific delivery details here..."
                  className="w-full border-2 rounded-md border-gray-300 p-2 outline-none focus-within:border-orange-400"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="w-2/5">
            <div className="bg-white rounded-lg p-4">
              <span className="flex items-center justify-between py-3">
                <p className="font-bold">Order Summary</p>

                {isSummaryOpen ? (
                  <FontAwesomeIcon
                    icon={faCircleChevronDown}
                    onClick={handleOrderSummary}
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
                    <p>Subtotal</p>
                    <p>{Currency} 1200</p>
                  </span>
                  <span className="py-2 flex items-center justify-between">
                    <p>Subtotal</p>
                    <p>{Currency} 1200</p>
                  </span>
                  <span className="py-2 flex items-center justify-between">
                    <p>Subtotal</p>
                    <p>{Currency} 1200</p>
                  </span>
                  <span className="py-2 flex items-center justify-between">
                    <p>Subtotal</p>
                    <p>{Currency} 1200</p>
                  </span>
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

              <span className="flex items-center justify-between text-lg text-orange-500 py-3 font-bold">
                <p>Total Amount</p>
                <p>{Currency} 1198.00</p>
              </span>

              <button className="w-full bg-orange-500 rounded-md text-white tracking-wider py-1.5 font-bold cursor-pointer">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
<div className="hidden md:block">

      <Footer />
</div>
    </>
  );
};

export default page;
