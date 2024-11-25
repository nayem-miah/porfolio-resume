export default function ContactForm() {
  return (
    <>
      <div className="rounded-xl bg-white p-[30px] dark:bg-card">
        <div>
          <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
            Let’s Chat<span className="text-theme">!</span>
          </h1>
          <p className="text-[14px] text-text">
            Feel free to contact us through Facebook if you prefer!
          </p>
          <div className="mb-[30px] mt-[30px]">
            <div>
              <div>
                <div>
                  <div className="grid w-full gap-[20px] md:flex">
                    <div className="md:w-1/2">
                      <input
                        className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
                        type="text"
                        placeholder="Full Name:"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <input
                        className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
                        type="email"
                        placeholder="Your Email:"
                      />
                    </div>
                  </div>
                  <div className="mt-[20px]">
                    <input
                      className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
                      type="text"
                      placeholder="Website Link:"
                    />
                  </div>
                  <div className="mt-[20px]">
                    <textarea
                      placeholder="Write your Massage here:"
                      name=""
                      id=""
                      cols="30"
                      rows="6"
                      className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
                    ></textarea>
                  </div>
                  <div>
                    <div className="mb-6 mt-[20px] flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="h-4 w-4 rounded bg-btn"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="font-medium text-text"
                        >
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-[30px]">
                    <button className="rounded-full border-2 border-theme bg-theme px-[30px] py-[10px] font-medium text-btn transition-all duration-300 dark:hover:bg-transparent dark:hover:text-theme">
                      Send Massage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
