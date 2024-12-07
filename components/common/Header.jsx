import Image from "next/image";
import Link from "next/link";

import LinkComponent from "./LinkComponent";
import SidebarOpen from "./SidebarOpen";
import ThemeSwitcher from "./ThemeSwitcher";
import { auth } from "@/auth";

export default async function Header() {
  const session = await auth();


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
                  <LinkComponent name={"Projects"} pathName={"/my-projects"} />
                </li>
                <li>
                  <LinkComponent name={"About"} pathName={"/about"} />
                </li>
                <li className="w-[100px]">
                  <LinkComponent pathName={"/contact"} />
                </li>
              </ul>
            </menu>
            <div className="flex items-center">
              <div className="flex items-center gap-4 px-[30px]">
                <Link href='/admin/deshboard' className="text-red-700">{session?.user?.name && 'Admin Deshboard'}</Link>

                <ThemeSwitcher isMobile={false} />
                <SidebarOpen />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
