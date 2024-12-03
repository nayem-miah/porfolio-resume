import SidebarLeft from "@/components/common/SidebarLeft";
import formatDateTime from "@/utils/dateTimeConverter";
import Image from "next/image";

export default async function page({ params }) {

  const { id } = await params;
  const data = await fetch(`https://nayemjs.vercel.app/api/get-blog-by-id?id=${id}`, {
    next: { revalidate: 120 },
  });
  const blog = await data.json()

  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <SidebarLeft />
          <div className="col-span-12 lg:col-span-9 lg:ml-[30px]">
            <div className="main__body">
              <section className="mt-[60px]">
                <div className="rounded-xl bg-white p-[30px] dark:bg-card">
                  <div className="h-auto w-full overflow-hidden rounded-lg">
                    {blog?.image && (
                      <Image
                        src={blog?.image}
                        width={800}
                        height={550}
                        alt="blog-detail"
                      />
                    )}
                  </div>
                  <div className="title mt-[40px]">
                    <h2 className="text-[26px] leading-[36px] text-btn dark:text-white md:text-[32px] md:leading-[42px]">
                      {blog?.title}
                    </h2>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-[16px] inline-block rounded-full bg-white px-[15px] py-[3px] text-[12px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                      {formatDateTime(blog?.pubshied)}
                    </div>
                    <div className="mt-[16px] inline-block rounded-full bg-white px-[15px] py-[3px] text-[12px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                      0 Comments
                    </div>
                  </div>
                  <div className="rich-text mt-[30px] text-text dark:text-gray-100">
                    <p> {blog?.description} </p>
                    <br />
                    <p> {blog?.conclusion} </p>
                  </div>
                  <div className="mt-[30px]">
                    <div className="grid items-center justify-between md:flex">
                      <div>
                        <p className="text-[18px] font-semibold text-btn dark:text-white">
                          By Nayem
                        </p>
                      </div>
                      <div className="mt-[20px] md:mt-0">
                        <div className="flex justify-center gap-3">
                          <button>share the post</button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[20px] border-t border-[#ddd] dark:border-btn"></div>
                    <div className="mt-[30px] hidden md:block">
                      <div className="flex items-center justify-between">
                        <div>
                          <a
                            className="group flex items-center gap-[20px]"
                            href="/blog-details/66adbc21c67a0a6ac06d4b1d"
                          >
                            <div>
                              <span className="inline-block rounded-full bg-btn p-[14px] text-text transition-all duration-300 group-hover:bg-theme group-hover:text-btn">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 448 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M0 32c477.6 0 366.6 317.3 367.1 366.3L448 480h-26l-70.4-71.2c-39 4.2-124.4 34.5-214.4-37C47 300.3 52 214.7 0 32zm79.7 46c-49.7-23.5-5.2 9.2-5.2 9.2 45.2 31.2 66 73.7 90.2 119.9 31.5 60.2 79 139.7 144.2 167.7 65 28 34.2 12.5 6-8.5-28.2-21.2-68.2-87-91-130.2-31.7-60-61-118.6-144.2-158.1z"></path>
                                </svg>
                              </span>
                            </div>
                            <div>
                              <p className="text-text">Latest Blog</p>
                              <h3 className="text-[24px] text-btn transition-all duration-300 dark:text-white dark:group-hover:text-theme">
                                Comprehensive list of important Docker commands
                                with descriptions, tailored for a MERN stack
                                developer
                              </h3>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[60px]">
                    <div>
                      <h2 className="text-[24px] text-btn dark:text-white">
                        0 Comments
                      </h2>
                    </div>
                    <div className="my-[15px] border-t border-[#ddd] dark:border-btn"></div>
                    <div className="parent mt-[40px]"></div>
                    <div className="mt-[40px]">
                      <div>
                        <h2 className="text-[24px] text-btn dark:text-white">
                          Post a Comment
                        </h2>
                        <p className="mt-[2px] text-text">
                          Your email address will not be published. Required
                          fields are marked *
                        </p>
                        <div className="mt-[30px]">
                          <div className="grid w-full gap-[20px] md:flex">
                            <div className="md:w-1/2">
                              <input
                                className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
                                type="text"
                                placeholder="Full Name:"
                              />
                            </div>
                            <div className="md:w-1/2">
                              <input
                                className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
                                type="email"
                                placeholder="Your Email:"
                              />
                            </div>
                          </div>
                          <div className="mt-[20px]">
                            <textarea
                              placeholder="Write your Comment here:"
                              name=""
                              id=""
                              cols="30"
                              rows="6"
                              className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
                            ></textarea>
                          </div>
                          <div>
                            <div className="mb-6 mt-[20px] flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="remember"
                                  aria-describedby="remember"
                                  type="checkbox"
                                  className="h-4 w-4 rounded bg-btn"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="remember"
                                  className="font-medium text-text"
                                >
                                  Save my name, email, and website in this
                                  browser for the next time I comment.
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="mb-[30px]">
                            <button className="rounded-full border-2 border-theme bg-theme px-[30px] py-[10px] font-medium text-btn transition-all duration-300 dark:hover:bg-transparent dark:hover:text-theme">
                              Post Comment
                            </button>
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

export async function generateStaticParams() {
  const res = await fetch("https://nayemjs.vercel.app/api/getBlogs");
  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const blogs = await res.json();
  return blogs.map((blog) => ({
    id: blog._id.toString(), // Assuming `_id` exists and is a valid identifier
  }));
}
