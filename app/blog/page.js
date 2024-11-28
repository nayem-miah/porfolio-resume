import SidebarLeft from "@/components/common/SidebarLeft";
import Image from "next/image";
export default function page() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <SidebarLeft />
          <div className="col-span-12 lg:col-span-9 lg:ml-[30px]">
            <div className="main__body">
              <section className="mt-[60px]">
                <div className="rounded-xl bg-white px-[20px] py-[40px] dark:bg-card lg:p-[40px]">
                  <div>
                    <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
                      Our Latest Blog<span className="text-theme">!</span>
                    </h1>
                    <p className="text-[14px] text-text">
                      Providing latest programming related information which
                      will help us a lot in our daily software based tasks. You
                      can visit these blocks of mine to get updated information
                      related to programming. Some important information can be
                      learned from some sites. The blogs are provided for
                      learning purpose only.
                    </p>
                    <div className="grid grid-cols-12 md:gap-[30px]">
                      <div className="col-span-12 md:col-span-6">
                        <div className="mt-[30px]">
                          <div
                            className="flex max-w-md items-center rounded-lg bg-white drop-shadow-md dark:shadow-none"
                            x-data="{ search: '' }"
                          >
                            <div className="w-full">
                              <input
                                type="search"
                                className="w-full rounded-full px-4 py-1 text-text focus:outline-none"
                                placeholder="search"
                                x-model="search"
                              />
                            </div>
                            <div>
                              <button
                                type="submit"
                                className="flex h-12 w-14 items-center justify-center rounded-r-lg bg-theme text-white"
                              >
                                <svg
                                  className="h-5 w-5 text-btn"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[40px]">
                      <div className="grid grid-cols-12 gap-[20px] md:gap-[30px]">
                        <div className="col-span-12 md:col-span-6">
                          <div className="group relative mb-[10px]">
                            <div className="h-auto w-full overflow-hidden rounded-xl drop-shadow-lg">
                              <Image
                                alt=""
                                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[108%]"
                                src="/download.png"
                                width={400}
                                height={400}
                              />
                            </div>
                            <div className="mt-[20px]">
                              <div className="flex gap-4">
                                <div className="inline-block rounded-full bg-white px-[15px] py-[3px] text-[11px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                                  03-08-2024
                                </div>
                                <div className="inline-block rounded-full bg-white px-[15px] py-[3px] text-[11px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                                  By Admin
                                </div>
                              </div>
                              <div className="mt-[15px]">
                                <a href="/blog-details/66adbc21c67a0a6ac06d4b1d">
                                  <h2 className="text-[28px] font-thin leading-[34px] tracking-wide text-btn transition-all duration-300 dark:text-white dark:hover:text-theme">
                                    Comprehensive list of important Docker
                                    commands with descriptions, tailored for a
                                    MERN stack developer
                                  </h2>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                          <div className="group relative mb-[10px]">
                            <div className="h-auto w-full overflow-hidden rounded-xl drop-shadow-lg">
                              <Image
                                alt=""
                                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[108%]"
                                src="/download.png"
                                width={400}
                                height={400}
                              />
                            </div>
                            <div className="mt-[20px]">
                              <div className="flex gap-4">
                                <div className="inline-block rounded-full bg-white px-[15px] py-[3px] text-[11px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                                  29-06-2024
                                </div>
                                <div className="inline-block rounded-full bg-white px-[15px] py-[3px] text-[11px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                                  By Admin
                                </div>
                              </div>
                              <div className="mt-[15px]">
                                <a href="/blog-details/667f7e4065f4067130d7118a">
                                  <h2 className="text-[28px] font-thin leading-[34px] tracking-wide text-btn transition-all duration-300 dark:text-white dark:hover:text-theme">
                                    html এ svg file কি? || HTML এ SVG ফাইল
                                    ব্যবহার করার নিয়ম
                                  </h2>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                          <div className="group relative mb-[10px]">
                            <div className="h-auto w-full overflow-hidden rounded-xl drop-shadow-lg">
                              <Image
                                alt=""
                                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[108%]"
                                src="/download.png"
                                width={400}
                                height={400}
                              />
                            </div>
                            <div className="mt-[20px]">
                              <div className="flex gap-4">
                                <div className="inline-block rounded-full bg-white px-[15px] py-[3px] text-[11px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                                  30-08-2023
                                </div>
                                <div className="inline-block rounded-full bg-white px-[15px] py-[3px] text-[11px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                                  By Admin
                                </div>
                              </div>
                              <div className="mt-[15px]">
                                <a href="/blog-details/64ef2a973dd0892621abac8b">
                                  <h2 className="text-[28px] font-thin leading-[34px] tracking-wide text-btn transition-all duration-300 dark:text-white dark:hover:text-theme">
                                    fake data এর মাধ্যমে ডাটা লোড করা || npm
                                    package
                                  </h2>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                          <div className="group relative mb-[10px]">
                            <div className="h-auto w-full overflow-hidden rounded-xl drop-shadow-lg">
                              <Image
                                alt=""
                                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[108%]"
                                src="/download.png"
                                width={400}
                                height={400}
                              />
                            </div>
                            <div className="mt-[20px]">
                              <div className="flex gap-4">
                                <div className="inline-block rounded-full bg-white px-[15px] py-[3px] text-[11px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                                  28-07-2023
                                </div>
                                <div className="inline-block rounded-full bg-white px-[15px] py-[3px] text-[11px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                                  By Admin
                                </div>
                              </div>
                              <div className="mt-[15px]">
                                <a href="/blog-details/64c3c7f0b9cfb18b055211b0">
                                  <h2 className="text-[28px] font-thin leading-[34px] tracking-wide text-btn transition-all duration-300 dark:text-white dark:hover:text-theme">
                                    Javascript data types with unique examples
                                  </h2>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                          <div className="group relative mb-[10px]">
                            <div className="h-auto w-full overflow-hidden rounded-xl drop-shadow-lg">
                              <Image
                                alt=""
                                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[108%]"
                                src="/download.png"
                                width={400}
                                height={400}
                              />
                            </div>
                            <div className="mt-[20px]">
                              <div className="flex gap-4">
                                <div className="inline-block rounded-full bg-white px-[15px] py-[3px] text-[11px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                                  28-07-2023
                                </div>
                                <div className="inline-block rounded-full bg-white px-[15px] py-[3px] text-[11px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                                  By Admin
                                </div>
                              </div>
                              <div className="mt-[15px]">
                                <a href="/blog-details/64c3c73db9cfb18b055211a7">
                                  <h2 className="text-[28px] font-thin leading-[34px] tracking-wide text-btn transition-all duration-300 dark:text-white dark:hover:text-theme">
                                    Javascript switch statement with conditions
                                  </h2>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                          <div className="group relative mb-[10px]">
                            <div className="h-auto w-full overflow-hidden rounded-xl drop-shadow-lg">
                              <Image
                                alt=""
                                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[108%]"
                                src="/download.png"
                                width={400}
                                height={400}
                              />
                            </div>
                            <div className="mt-[20px]">
                              <div className="flex gap-4">
                                <div className="inline-block rounded-full bg-white px-[15px] py-[3px] text-[11px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                                  28-07-2023
                                </div>
                                <div className="inline-block rounded-full bg-white px-[15px] py-[3px] text-[11px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                                  By Admin
                                </div>
                              </div>
                              <div className="mt-[15px]">
                                <a href="/blog-details/64c3c5beb9cfb18b05521187">
                                  <h2 className="text-[28px] font-thin leading-[34px] tracking-wide text-btn transition-all duration-300 dark:text-white dark:hover:text-theme">
                                    What the difference href
                                  </h2>
                                </a>
                              </div>
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
