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
        <Experience/>
            <Skill/>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
