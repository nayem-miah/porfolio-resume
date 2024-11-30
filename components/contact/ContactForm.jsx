"use client";

import { useState } from "react";
import ContactButton from "./ContactButton";

export default function ContactForm() {
  const [message, setMessage] = useState(null);

  const handleSubmit = async (formData) => {
    const data = Object.fromEntries(formData);

    const { name, email, websiteLink, message } = data;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        name,
        email,
        websiteLink,
        message,
      }),
    });

    if (res.status === 201) {
      setMessage("Message was sent successfully!!");
    } else {
      setMessage("Message failed!!");
    }
  };
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
                <form autoComplete="off" action={handleSubmit}>
                  <div className="grid w-full gap-[20px] md:flex">
                    <div className="md:w-1/2">
                      <input
                        required
                        className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
                        type="text"
                        placeholder="Full Name:"
                        name="name"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <input
                        className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
                        type="email"
                        placeholder="Your Email:"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-[20px]">
                    <input
                      className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
                      type="text"
                      placeholder="Website Link(optional):"
                      name="websiteLink"
                    />
                  </div>
                  <div className="mt-[20px]">
                    <textarea
                      placeholder="Write your Massage here:"
                      name="message"
                      id=""
                      cols="30"
                      rows="6"
                      className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
                    ></textarea>
                  </div>
                  <div>
                    <div className="mb-6 mt-[20px] flex items-start">
                      <p className="text-theme">{message}</p>
                    </div>
                  </div>

                  <div className="mb-[30px]">
                    <ContactButton />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
