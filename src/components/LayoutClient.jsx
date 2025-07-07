"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LayoutClient({ children }) {
  const pathname = usePathname();

  const noHeaderFooterRoutes = ["/search-restaurant-item", "/filters", "/checkout", "/restaurant"];

  const shouldHide = noHeaderFooterRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <div className="bg-[#F5F6F8] overflow-y-auto w-full overflow-x-hidden">
      {!shouldHide && <Header />}
      {children}
      {!shouldHide && <Footer />}
    </div>
  );
}
