"use client";

import DesktopHeader from "@/components/DesktopHeader";
import DesktopPage from "@/components/DesktopPage";
import MobileHeader from "@/components/MobileHeader";
import MobilePage from "@/components/MobilePage";
import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";

const page = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <>
      {/* <div className="block md:hidden mb-25">
        <MobileHeader />
      </div> */}

      <div className="hidden md:block">
        <DesktopHeader />
      </div>

      <div>{isMobile ? <MobilePage /> : <DesktopPage />}</div>
    </>
  );
};

export default page;
