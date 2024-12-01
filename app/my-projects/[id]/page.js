import SidebarLeft from "@/components/common/SidebarLeft";
import { getProjectById, getProjects } from "@/queries";
import formatDateTime from "@/utils/dateTimeConverter";
import Image from "next/image";
import Link from "next/link";

export default async function page({ params }) {
  const { id } = await params;
  const project = await getProjectById(id);

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
                        {project?.image && (
                          <Image
                            src={project?.image}
                            width={500}
                            height={500}
                            className="h-full w-full rounded-xl object-cover"
                            alt="p"
                          />
                        )}
                      </div>
                      <div className="mt-[40px]">
                        <h2 className="text-[32px] text-btn dark:text-white">
                          {project?.title}
                        </h2>

                        <div className="mt-[15px]">
                          <Link
                            className="boxShadow bg-green-400 dark:bg-lime-600 rounded-lg  px-[14px] py-[10px] text-[14px] text-white transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme"
                            href={project?.link}
                            target="_blank"
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
  const prjects = await getProjects();

  return prjects.map((project) => ({
    id: project.id.toString(),
  }));
}
