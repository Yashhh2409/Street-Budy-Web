import React from "react";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

const DesktopHeader = () => {
  return (
    <div className="bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))]">
      <TopBar />
      <Navbar />
    </div>
  );
};

export default DesktopHeader;
