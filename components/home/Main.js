import Image from "next/image";
import Link from "next/link";
import SidebarLeft from "../common/SidebarLeft";
import CountExpe from "../common/CountExpe";
export default function Main() {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <SidebarLeft />
            <div className="col-span-12 lg:col-span-9 lg:ml-[30px]">
              <div className="main__body">
                <section className="mt-[60px]">
                  <div className="rounded-xl bg-white p-[30px] dark:bg-card">
                    <div>
                      <p className="text-[18px] tracking-wide text-text">
                        <span className="dark:text-theme">Hi!</span> There I’m
                      </p>
                      <h2 className="mt-[20px] text-[50px] leading-[60px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
                        Professional
                        <span className="text-theme">Web Application</span>{" "}
                        <br />
                        Specialist
                      </h2>
                      <p className="mt-[15px] text-text">
                        Aspiring Front-End Developer with six months of
                        internship experience, specializing in React, Next.js,
                        and Django. Passionate about creating responsive and
                        dynamic user interfaces, I developed my skills through
                        personal projects and online courses. Eager to
                        contribute to a collaborative team and grow my technical
                        expertise.
                      </p>
                    </div>
                  </div>
                  <div className="mt-[30px]">
                    <div className="grid grid-cols-12 gap-[30px]">
                      <div className="col-span-12 md:col-span-5">
                        <div className="rounded-xl bg-white p-[30px] dark:bg-card">
                          <Image src="/logo.png" alt="" width={200} height={49} />
                          <div className="mt-[20px]">
                            <p className="text-[14px] hover:text-theme text-text dark:text-white">
                              Want To Know More
                            </p>
                            <Link className="hover:text-theme" href="/about">
                              <h3 className= " mt-[5px] inline-block text-[26px] tracking-[6px] text-btn dark:text-white">
                                About Me
                              </h3>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div className="mt-[30px] rounded-xl bg-white p-[30px] dark:bg-card">
                            <div className="flex gap-[20px]">
                              <span className="boxShadow rounded-lg p-[20px] dark:bg-btn dark:shadow-none">
                                <Image
                                  src="/react.png"
                                  alt=""
                                  width={50}
                                  height={52}
                                />
                              </span>
                              <span className="boxShadow rounded-lg p-[20px] dark:bg-btn dark:shadow-none">
                                <Image
                                  src="/nextjs.png"
                                  alt=""
                                  width={50}
                                  height={52}
                                />
                              </span>
                              <span className="boxShadow rounded-lg p-[20px] dark:bg-btn dark:shadow-none">
                                <Image
                                  src="/js.png"
                                  alt=""
                                  width={50}
                                  height={52}
                                />
                              </span>
                            </div>
                            <div className="mt-[30px]">
                              <p className="text-[14px] text-text dark:text-white">
                                Specialization
                              </p>
                              <Link className="hover:text-theme" href="/service">
                                <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn dark:text-white">
                                  Services Offer
                                </h3>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="mt-[30px] rounded-xl bg-white p-[30px] dark:bg-card">
                          <div className="grid grid-cols-12 pb-1">
                            <div className="col-span-6">
                              <h2 className="text-[50px] font-semibold text-btn dark:text-theme">
                                <div><CountExpe targetValue={2} /></div>
                              </h2>
                              <p className="text-text dark:text-white">
                                Years of <br />
                                Experience
                              </p>
                            </div>
                            <div className="col-span-6">
                              <h2 className="text-[50px] font-semibold text-btn dark:text-theme">
                                <div><CountExpe targetValue={50} /></div>
                              </h2>
                              <p className="text-text dark:text-white">
                                Project <br />
                                Completed
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-7">
                        <div className="rounded-xl bg-white p-[30px] dark:bg-card">
                          <div className="flex justify-center gap-[20px]">
                            <div className="overflow-hidden rounded-lg">
                              <div>
                                <Image
                                  src="/image-1.png"
                                  alt=""
                                  className="transition-all duration-300 hover:scale-[110%]"
                                  height={147}
                                  width={200}
                                />
                              </div>
                            </div>
                            <div className="overflow-hidden rounded-lg">
                              <div>
                                <Image
                                  src="/image-2.png"
                                  alt=""
                                  height={147}
                                  width={200}
                                  className="transition-all duration-300 hover:scale-[110%]"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-[30px]">
                            <p className="text-[14px] text-text dark:text-white">
                              Showcase View
                            </p>
                            <Link className="hover:text-theme" href="/projects/1">
                              <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn dark:text-white">
                                Projects
                              </h3>
                            </Link>
                          </div>
                        </div>
                        <div className="mt-[30px] grid grid-cols-12 gap-[30px]">
                          <div className="col-span-6 rounded-xl bg-theme px-[30px] py-[25px]">
                            <p className="text-[14px] text-btn">
                              Visit Our Blog
                            </p>
                            <Link className="hover:text-theme" href="/blog/1">
                              <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn">
                                Blog
                              </h3>
                            </Link>
                          </div>
                          <div className="hero-pattern col-span-6 rounded-xl bg-white px-[30px] py-[25px] dark:bg-card">
                            <p className="text-[14px] text-text dark:text-white">
                              Let’s work
                            </p>
                            <Link className="hover:text-theme" href="/contact">
                              <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn dark:text-white">
                                Contact
                              </h3>
                            </Link>
                          </div>
                        </div>
                        <div className="mt-[30px]">
                          <div
                            className="relative flex h-[205px] items-end rounded-xl bg-cover bg-local bg-center bg-no-repeat px-[30px] py-[30px]"
                            style={{
                              backgroundImage: "url('/image-4.png')",
                            }}
                          >
                            <div>
                              <p className="text-[14px] text-white">
                                What Client Says?
                              </p>
                              <Link className="hover:text-theme" href="/testimonial">
                                <h3 className="mt-[5px] text-[26px] tracking-[6px] text-white">
                                  Testimonials
                                </h3>
                              </Link>
                              <Image
                                className="absolute right-[30px] top-[50px] z-10"
                                src="/shape.svg"
                                alt=""
                                width={100}
                                height={100}
                              />
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
    </>
  );
}
