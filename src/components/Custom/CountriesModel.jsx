import { MyAppContext } from "@/context/MyAppContext";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const CountriesModel = ({ setCountriesModelOpen }) => {
  const { countries } = useContext(MyAppContext);

  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchQuery(inputValue);
      console.log("debounce Search:", inputValue);
    }, 400);

    return () => clearTimeout(timeout);
  }, [inputValue]);

 const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-55 flex items-center justify-center w-full bg-full bg-black/25">
      <div className="relative w-[250px] h-[400px] bg-white p-4 pt-10 rounded-lg shadow-xl">
        <div className="border-b-2 flex items-center gap-2 p-2 mb-2 focus-within:border-orange-500 focus-within:text-orange-500 transition-colors duration-300">
          <FontAwesomeIcon icon={faSearch} className="" />
          <input
            type="text"
            className="outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <div className="h-[300px] space-y-3 overflow-hidden overflow-y-auto">
          {filteredCountries.map((c) => (
            <span key={c.code} className="flex items-center gap-2 ">
              <Image src={c.image} width={25} height={25} alt="Countries" />
              <span className="flex items-center gap-1">
                <p>{c.dialCode}</p>
                <p className="w-[130px] truncate">{c.name}</p>
              </span>
            </span>
          ))}
        </div>

        <div
          onClick={() => setCountriesModelOpen(false)}
          className="absolute right-3 top-2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-orange-400"
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    </div>
  );
};

export default CountriesModel;
