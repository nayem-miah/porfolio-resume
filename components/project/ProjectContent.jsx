import Image from "next/image";
import Link from "next/link";

export default async function ProjectContent() {
  const data = await fetch("https://nayemjs.vercel.app/api/getProject", {
    next: { revalidate: 1800 } 
  });
  const projects = await data.json();

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
                  <p className="text-[16px] text-text">{project?.category}</p>
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
