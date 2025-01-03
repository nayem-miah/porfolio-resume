import { auth } from "@/auth";
import CreateProject from "@/components/project/CreateProject";
import { redirect } from "next/navigation";

export default async function Page(props) {
  const params = await props.searchParams;
  const { id } = params;
  const session = await auth();

  if (!session?.user) {
    redirect("/admin");
  }



  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-lg">
        <div className="mt-10 rounded-xl bg-white p-[30px] dark:bg-card shadow-lg">
          <div>
            <h1 className="text-[32px] leading-[42px] text-btn  dark:text-white md:text-[42px] md:leading-[52px] text-center">
              Update the Project<span className="text-theme">!</span>
            </h1>
            <p className="text-[14px] text-text text-center">
              Fill out the form below to update your blog.
            </p>
            <CreateProject isUpdate={true} id={id} />
          </div>
        </div>
      </div>
    </section>
  );
}
