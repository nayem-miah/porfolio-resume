import SidebarLeft from "@/components/common/SidebarLeft";
import ContactAddress from "@/components/contact/ContactAddress";
import ContactForm from "@/components/contact/ContactForm";

export default function page() {
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
                <ContactForm />
                <ContactAddress />
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
