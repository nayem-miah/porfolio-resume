import Loading from "@/components/common/Loading";
import SidebarLeft from "@/components/common/SidebarLeft";
import ProjectContent from "@/components/project/ProjectContent";
import { Suspense } from "react";

export default async function page() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <SidebarLeft />
          <div className="col-span-12 lg:col-span-9 lg:ml-[30px]">
            <div className="main__body">
              <section className="mt-[60px]">
                <div className="rounded-xl bg-white px-[20px] py-[40px] dark:bg-card md:p-[40px]">
                  <div>
                    <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
                      Featured Projects<span className="text-theme">!</span>
                    </h1>
                    <p className="text-[14px] text-text">
                      Below is a list of some of my recently created jobs with
                      detailed information on those jobs. Each project has a
                      live link attached and what technology the project has
                      been developed using. Projects are usually bound by web
                      design and development information.
                    </p>

                    <Suspense fallback={<Loading isProject={true}/>}>
                      <ProjectContent />
                    </Suspense>

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
