import { AuthContext } from "@/context/AuthContext";
import {
  faRightFromBracket,
  faTruck,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import useBodyScrollLock from "./useBodyScrollLock";

const MenuItems = [
  {
    id: 1,
    name: "Profile",
    icon: faUser,
  },
  {
    id: 2,
    name: "My Orders",
    icon: faTruck,
  },
];

const MenuModal = ({ isModalOpen, setModalOpen, SignupModelFun, handleLogout }) => {
  const { user } = useContext(AuthContext);

  useBodyScrollLock(isModalOpen);

  return (
    <div className="fixed inset-0 bg-black/50 z-60">
      <div className="absolute bg-white w-[18%] h-full right-0">
        <div className="bg-orange-100 p-6">
          <p className="text-[20px] font-semibold">Menu</p>
        </div>

        <div className="p-4">
          {MenuItems.map((menu) => (
            <div
              key={menu.id}
              className="flex items-center gap-2 hover:bg-orange-50 transition-colors duration-300 p-1 rounded-md cursor-pointer mb-1"
            >
              <div className="bg-orange-500 w-12 h-12 rounded-md flex items-center justify-center text-xl text-white">
                <FontAwesomeIcon icon={menu.icon} />
              </div>
              <p className="text-[16px] font-semibold tracking-wider text-gray-700">
                {menu.name}
              </p>
            </div>
          ))}

          {user ? (
            <div onClick={handleLogout} className="flex items-center gap-2 hover:bg-orange-50 transition-colors duration-300 p-1 rounded-md cursor-pointer mb-1">
              <div className="bg-red-500 w-12 h-12 rounded-md flex items-center justify-center text-xl text-white">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </div>
              <p className="text-[16px] font-semibold tracking-wider text-gray-700">
                Logout
              </p>
            </div>
          ) : (
            <div
              onClick={() => {
                setModalOpen(false);
                SignupModelFun();
              }}
              className="flex items-center gap-2 hover:bg-orange-50 transition-colors duration-300 p-1 rounded-md cursor-pointer mb-1"
            >
              <div className="bg-green-500 w-12 h-12 rounded-md flex items-center justify-center text-xl text-white">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </div>
              <p className="text-[16px] font-semibold tracking-wider text-gray-700">
                Signin
              </p>
            </div>
          )}
        </div>

        <span
          onClick={() => setModalOpen(false)}
          className="absolute w-8 h-8 right-4 top-4 hover:bg-red-100 transition-colors duration-200 flex items-center justify-center rounded-full cursor-pointer"
        >
          <FontAwesomeIcon icon={faXmark} className="text-lg" />
        </span>
      </div>
    </div>
  );
};

export default MenuModal;
