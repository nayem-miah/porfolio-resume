import Image from "next/image";
import Link from "next/link";
export default function Main() {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-3">
              <div className="info-card mt-[60px]">
                <div className="rounded-[20px] bg-white px-[45px] py-[40px] dark:bg-card">
                  <div className="relative flex justify-center">
                    <Image
                      src="/nayem.png"
                      alt=""
                      className="w-[200px]"
                      width={300}
                      height={417}
                    />
                    <Image
                      src="/underline.svg"
                      alt=""
                      className="absolute bottom-[0]"
                      width={300}
                      height={110}
                    />
                  </div>
                  <div>
                    <div className="mt-[25px]">
                      <div className="text-center">
                        <h3 className="text-[24px] tracking-[1px] text-btn dark:text-white">
                          Hy! I’m
                          <span className="text-theme"> Nayem Miah</span>
                        </h3>
                        <p className="text-btn dark:text-white">
                          Web Developer
                        </p>
                        <p className="mt-[25px] text-[14px] text-btn dark:text-white">
                          nayemmiah.cu@gmail.com
                        </p>
                        <p className="mt-1 text-[14px] text-btn dark:text-white">
                          +88 01609538714
                        </p>
                        <div className="mt-[30px] flex justify-center gap-3">
                          <Link
                            href="https://www.facebook.com/nayemmiahcu"
                            target="_blank"
                          >
                            <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 320 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                              </svg>
                            </button>
                          </Link>
                          <Link
                            href="https://github.com/nayem-miah"
                            target="_blank"
                          >
                            <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 496 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                              </svg>
                            </button>
                          </Link>
                          <Link
                            href="https://www.linkedin.com/in/nayem-miah/"
                            target="_blank"
                          >
                            <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                              </svg>
                            </button>
                          </Link>
                        </div>
                        <div className="mt-[30px]">
                          <Link
                            className="block rounded-full border-2 border-theme bg-theme py-[10px] font-medium text-btn transition-all duration-300 dark:hover:bg-transparent dark:hover:text-theme"
                            href="/contact"
                          >
                            Hire Me!
                          </Link>
                        </div>
                        <div className="mt-[20px]">
                          <Link
                            className="block rounded-full border-2 border-btn bg-btn py-[10px] font-medium text-white transition-all duration-300 dark:hover:bg-transparent"
                            href="https://flowcv.com/resume/ipifsve5ev"
                            target="_blank"
                          >
                            Download CV
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                          <Image src="/n.png" alt="" width={200} height={49} />
                          <div className="mt-[20px]">
                            <p className="text-[14px] text-text dark:text-white">
                              Want To Know More
                            </p>
                            <Link href="/about">
                              <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn dark:text-white">
                                About Us
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
                              <Link href="/service">
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
                                <div>1+</div>
                              </h2>
                              <p className="text-text dark:text-white">
                                Years of <br />
                              </p>
                            </div>
                            <div className="col-span-6">
                              <h2 className="text-[50px] font-semibold text-btn dark:text-theme">
                                <div>50+</div>
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
                            <Link href="/projects/1">
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
                            <Link href="/blog/1">
                              <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn">
                                Blog
                              </h3>
                            </Link>
                          </div>
                          <div className="hero-pattern col-span-6 rounded-xl bg-white px-[30px] py-[25px] dark:bg-card">
                            <p className="text-[14px] text-text dark:text-white">
                              Let’s work
                            </p>
                            <Link href="/contact">
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
                              <Link href="/testimonial">
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
