import BlogList from "@/components/blogs/BlogList";
import SidebarLeft from "@/components/common/SidebarLeft";

export default async function page() {
  const data = await fetch("https://nayemjs.vercel.app/api/getBlogs", {
    next: { revalidate: 120 },
  });
  const blogs = await data.json();

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
                            className="flex max-w-md items-center rounded-lg bg-white dark:bg-dark drop-shadow-md dark:shadow-none"
                            x-data="{ search: '' }"
                          >
                            <div className="w-full">
                              <input
                                type="search"
                                className="w-full rounded-full px-4 py-1 text-text bg-white  focus:outline-none"
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
                        {blogs?.map((blog) => (
                          <div
                            key={blog?._id}
                            className="col-span-12 md:col-span-6"
                          >
                            <BlogList blog={blog} />
                          </div>
                        ))}
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
