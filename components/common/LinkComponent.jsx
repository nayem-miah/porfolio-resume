"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TypingAnimate from "./TypingAnimate";
import { SidebarContext } from "@/providers/SidebarSwitchProvider";
import { useContext } from "react";

export default function LinkComponent({ name, pathName, sidebar }) {
  const { setSidebar } = useContext(SidebarContext);
  const path = usePathname();

  const handleClick = () => {
    setSidebar("left-[100%]");
  };
  return (
    <>
      <Link
        onClick={sidebar ? handleClick : undefined}
        href={pathName}
        className={`font-semibold ${
          path === pathName
            ? "text-theme"
            : "text-text hover:text-btn dark:hover:text-white"
        }`}
      >
        {name ? name : <TypingAnimate />}
      </Link>
    </>
  );
}
