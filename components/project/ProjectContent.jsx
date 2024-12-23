import Image from "next/image";
import Link from "next/link";

export default async function ProjectContent() {
  let projects;
  try {
    const response = await fetch("https://nayemjs.vercel.app/api/getProject", {
      next: { revalidate: 1800 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch project data");
    }
    projects = await response.json();
  } catch (err) {
    console.error(err);
    return (
      <div className="text-red-600 text-xl mt-10">
        Error to load project data. Please try again later.
      </div>
    );
  }

  return (
    <>
      <div className="mt-[60px]">
        <div className="grid grid-cols-12 md:gap-[30px]">
          {projects.map((project) => (
            <div
              key={project?._id}
              className="col-span-12 mb-[40px] md:col-span-6 md:mb-0"
            >
              <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                <div className="overflow-hidden rounded-lg drop-shadow-lg">
                  {project?.image && (
                    <Image
                      className="transition-all duration-500 group-hover:scale-[110%]"
                      src={project?.image}
                      width={400}
                      height={300}
                      alt={`${project?.title} image`}
                    />
                  )}
                </div>
                <div className="mb-[10px] mt-[20px]">
                  <h3 className="text-[16px] text-theme">
                    {" "}
                    <span className="text-gray-400"> Category:</span>{" "}
                    {project?.category}
                  </h3>
                  


                  <div className="flex items-center space-x-4">
                    <h3 className="text-[16px] text-gray-400">Technologies:</h3>{" "}
                    {project?.technologies?.map((technology, index) => (
                      <p
                        key={index}
                        className="text-[10px] px-2 rounded-md text-dark bg-gray-700"
                      >
                        {technology}
                      </p>
                    ))}
                  </div>
                  <br />

                  <Link
                    href={project?.link}
                    target="_blank"
                    className="text-[12px] p-1.5 rounded-md text-dark bg-theme "
                  >
                    View Live
                  </Link>
                  <br/>

                  <Link href={`/my-projects/${project?._id}`}>
                    <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                      {project?.title}
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
