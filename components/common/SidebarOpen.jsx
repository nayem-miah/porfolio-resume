"use client";

import { SidebarContext } from "@/providers/SidebarSwitchProvider";
import { useContext } from "react";

export default function SidebarOpen() {
    const { setSidebar } = useContext(SidebarContext);
  return (
    <>
      <button
        onClick={() => setSidebar("left-0")}
        className="rounded-full border border-[#919295] p-[10px] text-[25px]"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="text-text dark:text-text"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
        </svg>
      </button>
    </>
  );
}
