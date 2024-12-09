
import BlogList from "./BlogList";
export default async function Content() {
  let blogs;
  try {
    const response = await fetch("https://nayemjs.vercel.app/api/getBlogs", {
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blogs data");
    }
    blogs = await response.json();
  } catch (e) {
    console.error(e);
    return (
      <div className="text-red-600 text-xl mt-10">
        Error to load project data. Please try again later.
      </div>
    );
  }

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
