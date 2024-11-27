"use client";

import { SidebarContext } from "@/providers/SidebarSwitchProvider";
import { useContext } from "react";

export default function SidebarClose() {
  const { setSidebar } = useContext(SidebarContext);

  return (
    <>
      <button
        onClick={() => setSidebar("left-[100%]")}
        className="group absolute left-[-78px] rounded-lg bg-white px-[15px] py-[10px] text-[26px] dark:bg-card"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 384 512"
          className="text-btn transition-all duration-500 group-hover:rotate-90 dark:text-white dark:group-hover:text-theme"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
        </svg>
      </button>
    </>
  );
}
