import BlogList from "./BlogList";
export default async function Content() {
  const data = await fetch("https://nayemjs.vercel.app/api/getBlogs", {
    // next: { revalidate: 120 },
    cache: "no-store",
  });
  const blogs = await data.json();

  return (
    <>
      <div className="grid grid-cols-12 gap-[20px] md:gap-[30px] mt-[40px]">
        {blogs?.map((blog) => (
          <div key={blog?._id} className="col-span-12 md:col-span-6">
            <BlogList blog={blog} />
          </div>
        ))}
      </div>
    </>
  );
}
