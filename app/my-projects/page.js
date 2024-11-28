import SidebarLeft from "@/components/common/SidebarLeft";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <SidebarLeft />
          <div className="col-span-12 lg:col-span-9 lg:ml-[30px]">
            <div className="main__body">
              <section className="mt-[60px]">
                <div className="rounded-xl bg-white px-[20px] py-[40px] dark:bg-card md:p-[40px]">
                  <div>
                    <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
                      Featured Projects<span className="text-theme">!</span>
                    </h1>
                    <p className="text-[14px] text-text">
                      Below is a list of some of my recently created jobs with
                      detailed information on those jobs. Each project has a
                      live link attached and what technology the project has
                      been developed using. Projects are usually bound by web
                      design and development information.
                    </p>
                    <div className="mt-[60px]">
                      <div className="grid grid-cols-12 md:gap-[30px]">
                        <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                          <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                            <div className="overflow-hidden rounded-lg drop-shadow-lg">
                              <Image
                                className="transition-all duration-500 group-hover:scale-[110%]"
                                src="/project/project.jpg"
                                width={400}
                                height={400}
                                alt=""
                              />
                            </div>
                            <div className="mb-[10px] mt-[20px]">
                              <p className="text-[16px] text-text">
                                MERN, Sales Management
                              </p>
                              <Link href="/my-projects/1">
                                <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                                  Sales Management System - MERN, A
                                  full-featured sales management system
                                </h2>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                          <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                            <div className="overflow-hidden rounded-lg drop-shadow-lg">
                              <Image
                                className="transition-all duration-500 group-hover:scale-[110%]"
                                src="/project/project.jpg"
                                width={400}
                                height={400}
                                alt=""
                              />
                            </div>
                            <div className="mb-[10px] mt-[20px]">
                              <p className="text-[16px] text-text">
                                Portfolio, NEXT Js, CMS
                              </p>
                              <Link href="/my-projects/1">
                                <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                                  NEXT.js CMS Portfolio Website, A fully
                                  customizable portfolio website
                                </h2>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                          <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                            <div className="overflow-hidden rounded-lg drop-shadow-lg">
                              <Image
                                className="transition-all duration-500 group-hover:scale-[110%]"
                                src="/project/project.jpg"
                                width={400}
                                height={400}
                                alt=""
                              />
                            </div>
                            <div className="mb-[10px] mt-[20px]">
                              <p className="text-[16px] text-text">
                                E-Commerce, MERN
                              </p>
                              <Link href="/my-projects/1">
                                <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                                  E-Commerce MERN, E-commerce platform built
                                  using the MERN
                                </h2>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                          <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                            <div className="overflow-hidden rounded-lg drop-shadow-lg">
                              <Image
                                className="transition-all duration-500 group-hover:scale-[110%]"
                                src="/project/project.jpg"
                                width={400}
                                height={400}
                                alt=""
                              />
                            </div>
                            <div className="mb-[10px] mt-[20px]">
                              <p className="text-[16px] text-text">
                                MERN, Inventory
                              </p>
                              <Link href="/my-projects/1">
                                <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                                  Merchandise Management System - MERN,
                                  Including customer and supplier
                                </h2>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
