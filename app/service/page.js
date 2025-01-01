import CountExpe from "@/components/common/CountExpe";
import SidebarLeft from "@/components/common/SidebarLeft";
import ServiceCard from "@/components/service/ServiceCard";

export default function page() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <SidebarLeft />
          <div className="col-span-12 lg:col-span-9 lg:ml-[30px]">
            <div className="main__body">
              <section className="home__component mt-[60px]">
                <div className="rounded-xl bg-white px-[20px] py-[40px] dark:bg-card lg:p-[40px]">
                  <div>
                    <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
                      My Best Services<span className="text-theme">!</span>
                    </h1>
                    <p className="text-[14px] text-text">
                      If you are ready to elevate your online presence and
                      provide your users with a delightful digital journey, look
                      no further. Our web design, Web Development Services are
                      tailored to meet your specific needs and deliver
                      outstanding results. Contact me today, and lets embark on
                      a collaborative journey to create a website that
                      captivates, converts, and makes a lasting impression on
                      your audience.
                    </p>
                    <div className="mt-[60px]">
                      <div className="grid grid-cols-12 md:gap-[30px]">
                        <ServiceCard
                          imgPath="website-codes-1.svg"
                          title="Web Design & Front-End Development"
                          property1="Convert Figma, XD, PSD to html."
                          property2="Convert Html to React & Nextjs."
                          property3="Well-maintained consistency"
                        />

                        <ServiceCard
                          imgPath="designer.png"
                          title="Web App with MERN stack"
                          property1="Creating an Application using MERN.."
                          property2="Dynamic Single-Page Applications (SPAs)."
                          property3="Full Stack Applications with React, Next.js, Express.js and MongoDB."
                        />

                        <ServiceCard
                          imgPath="application.png"
                          title="Web app with python django"
                          property1="Creating an Application using Django"
                          property2="Creating API with Django REST API"
                          property3="Using PostgreSQL"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[60px] grid grid-cols-12 gap-[5px]">
                  <div className="col-span-6 md:col-span-3">
                    <div className="flex items-center gap-[20px]">
                      <h2 className="text-[50px] text-theme">
                        <div>
                          <div className="w-[40px]">
                            <CountExpe targetValue={2} />
                          </div>
                        </div>
                      </h2>
                      <p className="text-[14px] leading-[24px] text-text">
                        Years of <br />
                        Experience
                      </p>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <div className="flex items-center gap-[20px]">
                      <h2 className="text-[50px] text-theme">
                        <div>
                          <div className="w-[80px]">
                          <CountExpe targetValue={50} />
                          </div>
                        </div>
                      </h2>
                      <p className="text-[14px] leading-[24px] text-text">
                        Projects <br />
                        Completed
                      </p>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <div className="flex items-center gap-[20px]">
                      <h2 className="text-[50px] text-theme">
                        <div>
                          <div className="w-[60px]">
                          <CountExpe targetValue={10} />
                          </div>
                        </div>
                      </h2>
                      <p className="text-[14px] leading-[24px] text-text">
                        Satisfied <br />
                        Clients
                      </p>
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
