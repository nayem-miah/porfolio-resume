
import { auth } from "@/auth";
import CreateBlog from "@/components/blogs/CreateBlog";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();


  console.log(session?.user)

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <section className="flex min-h-screen container items-center justify-center">
      <div className="w-full max-w-full">
        <div className="mt-10 rounded-xl bg-white p-[30px] dark:bg-card shadow-lg">
          <div>
            <h1 className="text-[32px] leading-[42px] text-btn  dark:text-white md:text-[42px] md:leading-[52px] text-center">
              Create New Blog<span className="text-theme">!</span>
            </h1>
            <p className="text-[14px] text-text text-center">
              Fill out the form below to create your blog post.
            </p>
            <CreateBlog />
          </div>
        </div>
      </div>
    </section>
  );
}
