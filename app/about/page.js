import SidebarLeft from "@/components/common/SidebarLeft";

export default function page() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <SidebarLeft />
          <div className="col-span-12 lg:col-span-9 lg:ml-[30px]">
            <div className="main__body">
              <section className="home__component mt-[60px]">
                <div className="rounded-xl bg-white p-[40px] dark:bg-card">
                  <div className="grid grid-cols-12 md:gap-[50px]">
                    <div className="col-span-12 md:col-span-12">
                      <div className="mt-[60px] md:mt-0">
                        <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
                          About Me<span className="text-theme">!</span>
                        </h1>
                        <p className="text-[14px] text-text">
                          My favorite in this programming sector is to fix ‍any
                          Errors. Because in every error there is hope to learn
                          something new. I wont quit until I can fix the error.
                          In this programming life, I have tried to solve all
                          kinds of problems and have succeeded. My policy is to
                          stick with it until the problem is solved. Contact us
                          today, and lets bring your vision to life with the
                          power of Full stack development.
                        </p>
                        <div className="mt-[25px] gap-[30px] md:flex">
                          <div className="flex items-center gap-[20px]">
                            <h2 className="text-[50px] text-theme">
                              <div>
                                <div className="w-[80px]">
                                  <span>635</span>+
                                </div>
                              </div>
                            </h2>
                            <p className="text-[14px] leading-[24px] text-text">
                              Projects <br />
                              Completed
                            </p>
                          </div>
                          <div className="flex items-center gap-[20px]">
                            <h2 className="text-[50px] text-theme">
                              <div>
                                <div className="w-[60px]">
                                  <span>78</span>+
                                </div>
                              </div>
                            </h2>
                            <p className="text-[14px] leading-[24px] text-text">
                              Satisfied <br />
                              Clients
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[30px] grid grid-cols-12 gap-[30px]">
                  <div className="col-span-12 md:col-span-6">
                    <div className="rounded-xl bg-white p-[30px] dark:bg-card">
                      <div>
                        <h2 className="text-[24px] text-btn dark:text-white">
                          EXPERIENCE
                        </h2>
                        <div>
                          <div className="mt-[20px]">
                            <p className="text-[14px] text-text">
                              2023 - Present
                            </p>
                            <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                              Co Instructor (MERN || Next JS &amp; Prisma)
                            </p>
                            <p className="text-[12px] text-text">
                              Ostad Limited
                            </p>
                          </div>
                          <div className="mt-[20px]">
                            <p className="text-[14px] text-text">2018 - 2023</p>
                            <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                              Full stack Web Developer (MERN)
                            </p>
                            <p className="text-[12px] text-text">
                              Go-Lang co (USA)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <div className="rounded-xl bg-white p-[30px] dark:bg-card">
                      <div>
                        <h2 className="text-[24px] text-btn dark:text-white">
                          EDUCATION
                        </h2>
                        <div>
                          <div className="mt-[20px]">
                            <p className="text-[14px] text-text">
                              2015 - Present
                            </p>
                            <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                              Research on Software &amp; Web Application
                            </p>
                            <p className="text-[12px] text-text">
                              Learn With Rabbil Hasan || Udemy || Youtube
                            </p>
                          </div>
                          <div className="mt-[20px]">
                            <p className="text-[14px] text-text">2012 - 2015</p>
                            <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                              Bachelor of Business Studies (BBS)
                            </p>
                            <p className="text-[12px] text-text">
                              National University, Bangladesh
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[30px]">
                  <div className="rounded-xl bg-white p-[30px] dark:bg-card">
                    <div>
                      <h2 className="text-[24px] text-btn dark:text-white">
                        EXPERIENCE
                      </h2>
                      <div>
                        <div className="mt-[30px]">
                          <div>
                            <div className="w-full">
                              <div className="mb-2 flex items-center justify-between gap-4">
                                <p className="block antialiased font-sans text-[16px] font-medium text-btn dark:text-white">
                                  React JS
                                </p>
                                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-btn dark:text-white">
                                  90%
                                </h6>
                              </div>
                              <div className="flex flex-start overflow-hidden w-full font-sans rounded-full text-xs font-medium h-3.5 progress border border-theme/20 bg-theme/10 p-1">
                                <div
                                  className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-blue-500 text-white"
                                  style={{ width: "90%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="mt-[20px] w-full">
                              <div className="mb-2 flex items-center justify-between gap-4">
                                <p className="block antialiased font-sans text-[16px] font-medium text-btn dark:text-white">
                                  Next JS
                                </p>
                                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-btn dark:text-white">
                                  80%
                                </h6>
                              </div>
                              <div className="flex flex-start overflow-hidden w-full font-sans rounded-full text-xs font-medium h-3.5 progress border border-theme/20 bg-theme/10 p-1">
                                <div
                                  className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-blue-500 text-white"
                                  style={{ width: "80%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="mt-[20px] w-full">
                              <div className="mb-2 flex items-center justify-between gap-4">
                                <p className="block antialiased font-sans text-[16px] font-medium text-btn dark:text-white">
                                  JavaScript
                                </p>
                                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-btn dark:text-white">
                                  86%
                                </h6>
                              </div>
                              <div className="flex flex-start overflow-hidden w-full font-sans rounded-full text-xs font-medium h-3.5 progress border border-theme/20 bg-theme/10 p-1">
                                <div
                                  className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-blue-500 text-white"
                                  style={{ width: "86%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="mt-[20px] w-full">
                              <div className="mb-2 flex items-center justify-between gap-4">
                                <p className="block antialiased font-sans text-[16px] font-medium text-btn dark:text-white">
                                  TypeScript
                                </p>
                                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-btn dark:text-white">
                                  60%
                                </h6>
                              </div>
                              <div className="flex flex-start overflow-hidden w-full font-sans rounded-full text-xs font-medium h-3.5 progress border border-theme/20 bg-theme/10 p-1">
                                <div
                                  className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-blue-500 text-white"
                                  style={{ width: "60%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="mt-[20px] w-full">
                              <div className="mb-2 flex items-center justify-between gap-4">
                                <p className="block antialiased font-sans text-[16px] font-medium text-btn dark:text-white">
                                  PHP
                                </p>
                                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-btn dark:text-white">
                                  65%
                                </h6>
                              </div>
                              <div className="flex flex-start overflow-hidden w-full font-sans rounded-full text-xs font-medium h-3.5 progress border border-theme/20 bg-theme/10 p-1">
                                <div
                                  className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-blue-500 text-white"
                                  style={{ width: "65%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="mt-[20px] w-full">
                              <div className="mb-2 flex items-center justify-between gap-4">
                                <p className="block antialiased font-sans text-[16px] font-medium text-btn dark:text-white">
                                  Figma
                                </p>
                                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-btn dark:text-white">
                                  85%
                                </h6>
                              </div>
                              <div className="flex flex-start overflow-hidden w-full font-sans rounded-full text-xs font-medium h-3.5 progress border border-theme/20 bg-theme/10 p-1">
                                <div
                                  className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-blue-500 text-white"
                                  style={{ width: "85%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="mt-[20px] w-full">
                              <div className="mb-2 flex items-center justify-between gap-4">
                                <p className="block antialiased font-sans text-[16px] font-medium text-btn dark:text-white">
                                  Google Ads Campaign
                                </p>
                                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-btn dark:text-white">
                                  75%
                                </h6>
                              </div>
                              <div className="flex flex-start overflow-hidden w-full font-sans rounded-full text-xs font-medium h-3.5 progress border border-theme/20 bg-theme/10 p-1">
                                <div
                                  className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-blue-500 text-white"
                                  style={{ width: "75%" }}
                                ></div>
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
