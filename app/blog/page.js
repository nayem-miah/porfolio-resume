import Content from "@/components/blogs/Content";
import Loading from "@/components/common/Loading";
import SidebarLeft from "@/components/common/SidebarLeft";
import React, { Suspense } from "react";

export default async function Page() {
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
                <div className="rounded-xl bg-white px-[20px] py-[40px] dark:bg-card lg:p-[40px]">
                  <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
                    Our Latest Blog<span className="text-theme">!</span>
                  </h1>
                  <p className="text-[14px] text-text">
                    Providing latest programming-related information which will
                    help us a lot in our daily software-based tasks...
                  </p>

                  <Suspense fallback={<Loading />}>
                    <Content />
                  </Suspense>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
