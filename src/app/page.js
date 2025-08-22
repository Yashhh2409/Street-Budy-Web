"use client";

import DesktopHeader from "@/components/DesktopHeader";
import DesktopPage from "@/components/DesktopPage";
import MobileHeader from "@/components/MobileHeader";
import MobilePage from "@/components/MobilePage";
import { MyAppContext } from "@/context/MyAppContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useContext } from "react";

const page = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const {theme} = useContext(MyAppContext);

  return (
    <div className="bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))]">
      {/* <div className="block md:hidden mb-25">
        <MobileHeader />
      </div> */}

  <div className="hidden md:block fixed top-0 left-0 w-full z-50">
    <DesktopHeader />
  </div>

      <div className="block md:hidden">
        <MobilePage />
      </div>

      <div className="hidden md:block">
        <DesktopPage />
      </div>
    </div>
  );
};

export default page;
