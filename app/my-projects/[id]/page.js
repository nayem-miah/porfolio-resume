import SidebarLeft from "@/components/common/SidebarLeft";
import formatDateTime from "@/utils/dateTimeConverter";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata(props) {
  const params = await props.params;
  const { id } = params;
  let project;

  try {
    const response = await fetch(
      `https://nayemjs.vercel.app/api/get-project-by-id?id=${id}`,
      {
        next: { revalidate: 180 },
      }
    );
    if (!response.ok) {
      throw new Error("Error fetching contact");
    }
    project = await response.json();
  } catch (err) {
    console.error(err);
  }

  return {
    title: project?.title,
    description: project?.description,
    openGraph: {
      images: [
        {
          url: project?.image,
          alt: "Detail About The Project",
        },
      ],
    },
  };
}

export default async function page({ params }) {
  const { id } = await params;
  let project;
  try {
    const response = await fetch(
      `https://nayemjs.vercel.app/api/get-project-by-id?id=${id}`,
      {
        next: { revalidate: 1800 },
      }
    );

    if (!response.ok) {
      throw new Error("Error fetching project");
    }
    project = await response.json();
  } catch (err) {
    console.error(err);
    return (
      <div className="text-red-600 text-xl mt-10">
        Error to load project data. Please try again later.
      </div>
    );
  }

  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="hidden md:block lg:col-span-3">
            <SidebarLeft />
          </div>
          <div className="col-span-12 lg:col-span-9 lg:ml-[30px]">
            <div className="main__body">
              <section className="mt-[60px]">
                <div className="rounded-xl bg-white p-[30px] dark:bg-card">
                  <div>
                    <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
                      Projects Details<span className="text-theme">!</span>
                    </h1>

                    <div className="mt-[60px]">
                      <div className="h-auto w-full overflow-hidden rounded-lg">
                        {project?.image && (
                          <Image
                            src={project?.image}
                            width={500}
                            height={500}
                            className="h-full w-full rounded-xl object-cover"
                            alt={project?.title}
                            priority={true} // Ensures critical images are preloaded
                            loading="eager" // Ensures above-the-fold images load eagerly
                          />
                        )}
                      </div>
                      <div className="mt-[40px]">
                        <h2 className="text-[32px] text-btn dark:text-white">
                          {project?.title}
                        </h2>

                        <h3 className="mt-2 text-[18px] text-theme">
                          {" "}
                          <span className="text-gray-400"> Category:</span>{" "}
                          {project?.category}
                        </h3>

                        <div className="mt-2 flex items-center space-x-4">
                          <h3 className="text-[18px] text-gray-400">
                            Technologies:
                          </h3>{" "}
                          {project?.technologies?.map((technology, index) => (
                            <p
                              key={index}
                              className="text-[12px] px-2 rounded-md text-dark bg-gray-700"
                            >
                              {technology}
                            </p>
                          ))}
                        </div>

                        <div className="mt-2 flex items-center space-x-4">
                          <h3 className=" text-[18px] text-gray-400">
                            Live View
                          </h3>{" "}
                          <Link
                            href={project?.link}
                            className="text-[14px] py-0.5 px-2 rounded-md text-dark bg-theme "
                          >
                            Live View
                          </Link>
                        </div>

                        <div className="mt-[20px]">
                          <div className="rich-text text-text dark:text-gray-400">
                            <p>{project?.description}</p>
                          </div>
                        </div>
                        <br />

                        <div className="h-auto w-full overflow-hidden rounded-lg">
                          {project?.overviewImage && (
                            <Image
                              src={project?.overviewImage}
                              width={500}
                              height={500}
                              className="h-full w-full rounded-xl object-cover"
                              alt="overviewImage"
                            />
                          )}
                        </div>

                        <br />
                        <div className="mt-[20px]">
                          <div className="rich-text text-text dark:text-gray-400">
                            <p>{project?.conclusion}</p>
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
                        {project?.client}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] text-text">Category:</p>
                      <p className="mt-[6px] text-[18px] font-semibold text-btn dark:text-white">
                        {project?.category}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] text-text">Time frame:</p>
                      <p className="mt-[6px] text-[18px] font-semibold text-btn dark:text-white">
                        {formatDateTime(project?.time)}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] text-text">Live Link:</p>
                      <div className="mt-[15px]">
                        <Link
                          className="boxShadow bg-green-400 dark:bg-lime-600 rounded-lg  px-[14px] py-[10px] text-[14px] text-white transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme"
                          href={project?.link}
                          target="_blank"
                        >
                          View Project
                        </Link>
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
  try {
    const res = await fetch("https://nayemjs.vercel.app/api/getProject");
    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }
    const projects = await res.json();
    return projects.map((project) => ({
      id: project._id.toString(),
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}
