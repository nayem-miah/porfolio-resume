"use client";

import { SidebarContext } from "@/providers/SidebarSwitchProvider";
import { useContext } from "react";
export default function SidebarAddCss({ children }) {
  const { sidebar } = useContext(SidebarContext);

  return (
    <>
      <div
        className={`sidebar fixed ${sidebar} top-0 z-[999] h-screen w-full bg-btn/60 transition-all duration-500`}
      >
        {children}
      </div>
    </>
  );
}
