import Image from "next/image";
import Link from "next/link";

import LinkComponent from "./LinkComponent";
import SidebarOpen from "./SidebarOpen";

export default function Header() {
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
                  <LinkComponent name={"Home"} pathName={"/"} />
                </li>
                <li>
                  <LinkComponent name={"About Me"} pathName={"/about"} />
                </li>
                <li className="w-[100px]">
                  <LinkComponent pathName={"/contact"} />
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
                <SidebarOpen />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
