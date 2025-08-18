// "use client";

// import { AuthContext } from "@/context/AuthContext";
// import { MyAppContext } from "@/context/MyAppContext";
// import {
//   faMinus,
//   faPlus,
//   faStar,
//   faXmark,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React, { useContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";

// const Modal = ({ isVisible, onClose = { onclose }, Item }) => {
//   const { price, Currency, addToCart, updateCart, fetchedCartItems } =
//     useContext(MyAppContext);

//   console.log("Item:", Item);

//   const [quantity, setQuantity] = useState(1);
//   const [productConfig, setProductConfig] = useState();

//   const matchedItem = fetchedCartItems.find(
//     (cartItem) => cartItem.product_id === Item?.id
//   );

//   // if matched in DB, show DB quantity, else show state quantity
//   const currentQuantity = matchedItem ? matchedItem.quantity : quantity;

//   const handleQuantityChange = (newQuantity) => {
//     if (newQuantity < 1) return;
//     setQuantity(newQuantity);
//   };

//   const router = useRouter();

//   // Fetch product-config
//   useEffect(() => {
//     const fetchProductConfig = async () => {
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product-config?product_id=${Item?.id}`
//         );
//         const data = await res.json();
//         setProductConfig(data);

//         console.log("product config in modal newly:", productConfig);
//       } catch (error) {
//         console.error("Error fetching product config");
//       }
//     };
//     fetchProductConfig();
//   }, [productConfig]);

//   if (!isVisible) return null;
//   return (
//     <div className="fixed bottom-0 md:inset-0 md:bg-black/25 backdrop-blur-sm flex items-center justify-center z-50">
//       <div className="relative mb-12 flex flex-col gap-4 w-full md:w-[500px] bg-white p-4 rounded-t-2xl   md:rounded-2xl z-50 md:z-0">
//         <div className="flex gap-2 items-center">
//           <div className="relative w-[100px] md:w-[120px] h-[100px] md:h-[120px] overflow-hidden bg-red-800 rounded-2xl">
//             <Image
//               src={Item?.img}
//               alt="img"
//               width={100}
//               height={100}
//               className="w-full h-full object-cover rounded-2xl"
//             />
//             <p className="absolute text-sm bottom-0 text-white font-bold px-2 bg-gradient-to-r from-black to-transparent">
//               {Item?.discount}% OFF
//             </p>
//           </div>
//           <div>
//             <p className="font-bold">{Item?.product_name}</p>
//             <p className="text-orange-500 text-sm">{Item?.store_name}</p>
//             <div className="flex gap-1 text-sm text-gray-500 items-center">
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStar} />
//               <p>(0)</p>
//             </div>
//             <span className="flex gap-2">
//               <p className="text-gray-500 line-through">{Item?.normal_price}</p>
//               <p>{price(Item?.id)}</p>
//             </span>
//           </div>
//         </div>

//         <div>
//           <div className="flex flex-col justify-between py-2">
//             <div className="flex justify-between mb-1">
//               <p className="text-gray-800 font-bold">Description</p>
//               <div className="w-fit flex items-center gap-1 border-amber-600 shadow-xl px-2 rounded-full">
//                 {Item?.isVeg ? (
//                   <div className="green-veg-icon-border">
//                     <div className="green-veg-icon-dot"></div>
//                   </div>
//                 ) : (
//                   <div className="red-non-veg-icon-border">
//                     <div className="red-non-veg-icon-dot"></div>
//                   </div>
//                 )}
//                 <div>{Item?.isVeg}</div>
//                 <p className="text-sm">{Item?.isVeg ? "Veg" : "Non-Veg"}</p>
//               </div>
//             </div>
//             <p className="text-sm text-gray-500">
//               {Item?.Description ||
//                 "If your are looking for good food near by your area street buddy is the only option you have!"}
//             </p>
//           </div>

//           <div className="flex justify-between">
//             <div>
//               <p className="text-gray-800 font-bold">{Item?.option_name}</p>
//               <span className="flex gap-1 text-sm text-gray-500">
//                 <input type="radio" name="" id="" />
//                 <p>Tomato sauce</p>
//               </span>
//             </div>

//             <div className="text-sm text-gray-500">
//               <p>Optional</p>
//               <p>$ 10</p>
//             </div>
//           </div>

//           <div className="flex flex-col gap-2 bg-gray-100 rounded-xl py-4 px-2">
//             <span className="flex items-center justify-between">
//               <p className="font-bold">{Item?.option_name}</p>
//               <p className="text-red-500 bg-red-100 px-1 py-0.5 text-[12px] rounded-md">
//                 Required
//               </p>
//             </span>

//             {/* addons  */}
//             <div className="">
//               {JSON.parse(Item?.option_values).map((option, index) => (
//                 <label
//                   key={index}
//                   className="flex items-center justify-between p-2 rounded cursor-pointer"
//                 >
//                   <div className="flex items-center gap-2">
//                     <input type="radio" name="size" id={`option-${index}`} />
//                     <label htmlFor={`option-${index}`}>{option.name}</label>
//                   </div>

//                   <div>
//                     <p>
//                       {Currency} {option.price}
//                     </p>
//                   </div>
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>

//         <FontAwesomeIcon
//           icon={faXmark}
//           onClick={onClose}
//           className="absolute w-4 h-4 right-2 top-2 bg-white shadow-lg border-2 border-orange-500 p-2 rounded-full cursor-pointer"
//         />

//         <div className="flex justify-between">
//           <p className="text-orange-500 font-bold">Total Amount:</p>
//           <span className="flex gap-2">
//             <p className="line-through text-gray-500">$ 600.00</p>
//             <p className="text-orange-500 font-bold">$ 540.00</p>
//           </span>
//         </div>

//         {/* Quantity Selector & Add button  */}
//         <div className="flex gap-2">
//           <div className="flex gap-2 items-center">
//             <div
//               onClick={() => handleQuantityChange(currentQuantity - 1)}
//               className="cursor-pointer"
//             >
//               <FontAwesomeIcon
//                 icon={faMinus}
//                 width={10}
//                 height={10}
//                 className="w-4 h-4 border-[2px] border-gray-500 rounded-full"
//               />
//             </div>
//             <p>{currentQuantity}</p>
//             <div
//               onClick={() => handleQuantityChange(currentQuantity + 1)}
//               className="cursor-pointer"
//             >
//               <FontAwesomeIcon
//                 icon={faPlus}
//                 width={10}
//                 height={10}
//                 className="w-4 h-4 border-[2px] border-gray-500 rounded-full"
//               />
//             </div>
//           </div>

//           <button
//             onClick={() => {
//               addToCart({
//                 id: Item.id,
//                 product_title: Item.product_name,
//                 price: Item.normal_price,
//                 product_img: Item.img,
//                 option_values: Item.option_values,
//                 store_name: Item.store_name,
//                 store_id: Item.store_id,
//                 discount: Item.discount,
//                 quantity: currentQuantity,
//               });
//               toast.success("Added Bhaiii!!");
//               onClose();
//             }}
//             className="w-full bg-orange-500 rounded-full py-1 text-white font-bold cursor-pointer"
//           >
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
