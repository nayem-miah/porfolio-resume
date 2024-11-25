"use client";
import Image from "next/image";
import Link from "next/link";
import TypingAnimate from "./TypingAnimate";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { SidebarContext } from "@/providers/SidebarSwitchProvider";

export default function Header() {
  const { setSidebar } = useContext(SidebarContext);

  const path = usePathname();
  return (
    <>
      <header>
        <div className="container mx-auto pt-[30px]">
          <div className="flex justify-between rounded-[10px] bg-white py-[20px] dark:bg-card">
            <div className="logo flex items-center px-[30px]">
              <Link href="/">
                <Image src="/logo.png" alt="logo" width={180} height={39} />
              </Link>
            </div>
            <menu className="hidden items-center md:flex">
              <ul className="flex gap-4">
                <li>
                  <Link
                    href="/"
                    className={`font-semibold ${
                      path === "/"
                        ? "text-theme"
                        : "text-text hover:text-btn dark:hover:text-white"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`font-semibold ${
                      path === "/about"
                        ? "text-theme"
                        : "text-text hover:text-btn dark:hover:text-white"
                    }`}
                  >
                    About Me
                  </Link>
                </li>
                <li className="w-[100px]">
                  <Link
                    href="/contact"
                    className={`font-semibold ${
                      path === "/contact"
                        ? "text-theme"
                        : "text-text hover:text-btn dark:hover:text-white"
                    }`}
                  >
                    <TypingAnimate />
                  </Link>
                </li>
              </ul>
            </menu>
            <div className="flex items-center">
              <div className="flex items-center gap-4 px-[30px]">
                <button className="hidden items-center gap-3 md:flex">
                  <p>
                    <span className="text-btn dark:text-theme">Dark</span>
                    <span className="text-btn dark:text-white"> / </span>
                    <span className="text-theme dark:text-white">Light</span>
                  </p>
                  <div>
                    <Image src="/sun.svg" alt="sun" width={30} height={30} />
                  </div>
                </button>
                <button onClick={()=>setSidebar('left-0')} className="rounded-full border border-[#919295] p-[10px] text-[25px]">
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
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
