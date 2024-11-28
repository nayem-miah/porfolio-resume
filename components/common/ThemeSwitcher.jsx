"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeSwitcher({ isMobile }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleThemeSwitch = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      {isMobile ? (
        <button
          onClick={handleThemeSwitch}
          className="my-[30px] inline-block cursor-pointer"
        >
          <div className="flex items-center gap-4 md:hidden">
            <div>
              <p>
                <span className="text-btn dark:text-theme">Dark</span>
                <span className="text-btn dark:text-white"> / </span>
                <span className="text-theme dark:text-white">Light</span>
              </p>
            </div>
            <div>
              <Image src="/sun.svg" alt="sun" width={30} height={30} />
            </div>
          </div>
        </button>
      ) : (
        <button
          onClick={handleThemeSwitch}
          className="hidden items-center gap-3 md:flex"
        >
          <p>
            <span className="text-btn dark:text-theme">Dark</span>
            <span className="text-btn dark:text-white"> / </span>
            <span className="text-theme dark:text-white">Light</span>
          </p>
          <div>
            <Image src="/sun.svg" alt="sun" width={30} height={30} />
          </div>
        </button>
      )}
    </>
  );
}
