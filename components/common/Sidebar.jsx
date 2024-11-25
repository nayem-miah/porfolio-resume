import React from 'react'

export default function Sidebar() {
  return (
    <>
         <div className="sidebar fixed left-[100%] top-0 z-[999] h-screen w-full bg-btn/60 transition-all duration-500">
            <div className="ml-auto h-screen w-[300px] bg-white px-[30px] pt-[60px] dark:bg-card">
              <div className="relative flex justify-center">
                <button className="group absolute left-[-78px] rounded-lg bg-white px-[15px] py-[10px] text-[26px] dark:bg-card">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    className="text-btn transition-all duration-500 group-hover:rotate-90 dark:text-white dark:group-hover:text-theme"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
                  </svg>
                </button>
                <div>
                  <img src="/n.png" alt="" />
                </div>
              </div>
              <div className="my-[30px] border-t border-[#ddd] dark:border-btn"></div>
              <nav className="mt-[30px]">
                <ul>
                  <li className="text-[18px] font-semibold">
                    <a
                      aria-current="page"
                      className="inline-block py-[8px] text-theme dark:text-theme"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="text-[18px] font-semibold">
                    <a
                      className="inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                      href="/about"
                    >
                      About Me
                    </a>
                  </li>
                  <li className="text-[18px] font-semibold">
                    <a
                      className="inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                      href="/projects/1"
                    >
                      Projects
                    </a>
                  </li>
                  <li className="text-[18px] font-semibold">
                    <a
                      className="inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                      href="/blog/1"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="text-[18px] font-semibold">
                    <a
                      className="inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                      href="/service"
                    >
                      Services
                    </a>
                  </li>
                  <li className="text-[18px] font-semibold">
                    <a
                      className="inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                      href="/testimonial"
                    >
                      Testimonial
                    </a>
                  </li>
                  <li className="text-[18px] font-semibold">
                    <a
                      className="inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                      href="/contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <button className="my-[30px] inline-block cursor-pointer">
                <div className="flex items-center gap-4 md:hidden">
                  <div>
                    <p>
                      <span className="text-btn dark:text-theme">Dark</span>
                      <span className="text-btn dark:text-white"> / </span>
                      <span className="text-theme dark:text-white">Light</span>
                    </p>
                  </div>
                  <div>
                    <img src="/sun.svg" alt="" />
                  </div>
                </div>
              </button>
              <div className="contact absolute bottom-[30px] mt-[10px]">
                <div>
                  <p className="text-[20px] font-semibold text-btn dark:text-white">
                    Follow Me:
                  </p>
                  <div className="mt-[20px] flex gap-3">
                    <a
                      href="https://www.facebook.com/amitbiswas1994"
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
                    </a>
                    <a href="https://github.com/amitbd599" target="_blank">
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
                    </a>
                    <a
                      href="https://www.linkedin.com/in/amitbiswas-tm/"
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
                    </a>
                    <a href="https://medium.com/@amitbd599" target="_blank">
                      <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 640 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
