import Link from "next/link";

export default function Experience() {
  return (
    <>
      <div className="mt-[30px] grid grid-cols-12 gap-[30px]">
        <div className="col-span-12 md:col-span-6">
          <div className="rounded-xl bg-white p-[30px] dark:bg-card">
            <div>
              <h2 className="text-[24px] text-btn dark:text-white">
                EXPERIENCE
              </h2>
              <div>
                <div className="mt-[20px]">
                  <p className="text-[14px] text-text">
                    Six months of internship
                  </p>
                  <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                    Front-End Developer (React || Next JS &amp; MongoDB)
                  </p>
                  <Link href='https://agamilabs.com/' target="_blank" className="text-[12px] hover:text-theme text-text">Agamilabs Limited</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="rounded-xl bg-white p-[30px] dark:bg-card">
            <div>
              <h2 className="text-[24px] text-btn dark:text-white">
                EDUCATION
              </h2>
              <div>
       
                <div className="mt-[20px]">
                  <p className="text-[14px] text-text">Jan-2024 - July-2024 7 months</p>
                  <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                    Reactive Accelerator - Course &amp; Web Application
                  </p>
                  <p className="text-[12px] text-text">
                     <Link href='https://learnwithsumit.com/rnext' target="_blank" className="text-[12px] hover:text-theme text-text"> Learn with Sumit</Link> average marks 85%. Topics advanced JS,
                    React,NextJs, Tailwindcss, Server component, SSR etc.
                  </p>
           
                </div>
                <div className="mt-[20px]">
                  <p className="text-[14px] text-text">2019 - 2024</p>
                  <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                    Bachelor of Arts Studies (BA) In Persian Literature
                  </p>
                  <Link href='https://admission.cu.ac.bd/' target="_blank" className="text-[12px] text-text hover:text-theme">
                   University of Chittagong
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
