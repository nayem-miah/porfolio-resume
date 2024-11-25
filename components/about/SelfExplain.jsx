import CountExpe from "./CountExpe";

export default function SelfExplain() {
  return (
    <>
      <div className="rounded-xl bg-white p-[40px] dark:bg-card">
        <div className="grid grid-cols-12 md:gap-[50px]">
          <div className="col-span-12 md:col-span-12">
            <div className="mt-[60px] md:mt-0">
              <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
                About Me<span className="text-theme">!</span>
              </h1>
              <p className="text-[14px] text-text">
                My favorite in this programming sector is to fix ‍any Errors.
                Because in every error there is hope to learn something new. I
                wont quit until I can fix the error. In this programming life, I
                have tried to solve all kinds of problems and have succeeded. My
                policy is to stick with it until the problem is solved. Contact
                me today, and lets bring your vision to life with the power of
                Full stack development.
              </p>
               <CountExpe/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
