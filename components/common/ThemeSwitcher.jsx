"use client";
import { SidebarContext } from "@/providers/SidebarSwitchProvider";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useContext } from "react";

export default function ThemeSwitcher({ isMobile }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { setSidebar } = useContext(SidebarContext);

  const handleThemeSwitch = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setSidebar("left-[100%]")
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <button
        onClick={handleThemeSwitch}
        className={`${
          isMobile
            ? "my-[30px] inline-block cursor-pointer flex items-center gap-4"
            : "hidden md:flex items-center gap-3 cursor-pointer"
        }`}
      >
        <p>
          <span className="text-btn dark:text-theme">Dark</span>
          <span className="text-btn dark:text-white"> / </span>
          <span className="text-theme dark:text-white">Light</span>
        </p>
        <Image src="/sun.svg" alt="sun" width={30} height={30} />
      </button>
    </>
  );
}
