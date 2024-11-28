import SidebarLeft from "@/components/common/SidebarLeft";
import Image from "next/image";

export default function page({params: {id}}) {

  console.log('id..................',id)
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <SidebarLeft />
          <div className="col-span-12 lg:col-span-9 lg:ml-[30px]">
            <div className="main__body">
              <section className="mt-[60px]">
                <div className="rounded-xl bg-white p-[30px] dark:bg-card">
                  <div>
                    <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
                      Projects Details<span className="text-theme">!</span>
                    </h1>
                    <p className="text-[14px] text-text">
                      Featured and popular products are the best-selling items
                      for your product, product range, or company. However, a
                      featured product could be a new product line or seasonal
                      products instead.
                    </p>
                    <div className="mt-[60px]">
                      <div className="h-auto w-full overflow-hidden rounded-lg">
                        <Image
                          src="/project/project.jpg"
                          width={200}
                          height={200}
                          className="h-full w-full rounded-xl object-cover"
                          alt="p"
                        />
                      </div>
                      <div className="mt-[40px]">
                        <h2 className="text-[32px] text-btn dark:text-white">
                          NEXT.js CMS Portfolio Website, A fully customizable
                          portfolio website
                        </h2>
                        <div className="mt-[20px]">
                          <div className="rich-text text-text dark:text-gray-400">
                            <p>
                              A fully customizable portfolio website built with
                              a CMS using NEXT.js and Prisma, allowing seamless
                              content management and showcasing projects
                              dynamically.
                            </p>
                            <p>
                              <br />
                            </p>
                            <ul>
                              <li>
                                Developed using NEXT.js with Server-Side
                                Rendering (SSR) for optimal performance and SEO.
                              </li>
                              <li>
                                Integrated Prisma and PrismaClient with a MySQL
                                database for efficient data management.
                              </li>
                              <li>
                                Features an Admin Dashboard where every content
                                element can be edited, offering full control
                                over the website.
                              </li>
                              <li>
                                Secure authentication and API routes are
                                implemented using Next.js API, middleware, and
                                cookies with JOSE.
                              </li>
                              <li>
                                Supports pagination for easy navigation through
                                content-heavy pages.
                              </li>
                              <li>
                                Integrated React-Quill for rich text editing,
                                making content updates user-friendly.
                              </li>
                              <li>
                                Built with Tailwind CSS for fast, responsive,
                                and modern UI design.
                              </li>
                              <li>
                                The website is fully responsive, ensuring a
                                seamless user experience across all devices.
                              </li>
                            </ul>
                            <p>
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[30px] rounded-xl bg-white p-[30px] dark:bg-card">
                  <h2 className="text-[24px] text-btn dark:text-white">
                    Project Info
                  </h2>
                  <div className="mt-[20px] grid gap-[30px] xl:flex xl:gap-[60px]">
                    <div>
                      <p className="text-[14px] text-text">Client:</p>
                      <p className="mt-[6px] text-[18px] font-semibold text-btn dark:text-white">
                        Own
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] text-text">Category:</p>
                      <p className="mt-[6px] text-[18px] font-semibold text-btn dark:text-white">
                        Portfolio, NEXT Js, CMS
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] text-text">Time frame:</p>
                      <p className="mt-[6px] text-[18px] font-semibold text-btn dark:text-white">
                        2024/02/05
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] text-text">Live Link:</p>
                      <div className="mt-[15px]">
                        <a
                          className="boxShadow rounded-lg bg-white px-[14px] py-[10px] text-[14px] text-white transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme"
                          href="https://lariv.vercel.app/"
                          target="_blank"
                        >
                          View Project
                        </a>
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
