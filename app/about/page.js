import CountExpe from "@/components/common/CountExpe";
import Experience from "@/components/about/Experience";
import SelfExplain from "@/components/about/SelfExplain";
import Skill from "@/components/about/Skill";
import SidebarLeft from "@/components/common/SidebarLeft";


export default function page() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <SidebarLeft />
          <div className="col-span-12 lg:col-span-9 lg:ml-[30px]">
            <div className="main__body">
              <section className="home__component mt-[60px]">
                <SelfExplain />
                <div className="mt-[25px] gap-[30px] md:flex">
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
                  <div className="flex items-center gap-[20px]">
                    <h2 className="text-[50px] text-theme">
                      <div>
                        <div className="w-[60px]">
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
                <Experience />
                <Skill />
         
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
