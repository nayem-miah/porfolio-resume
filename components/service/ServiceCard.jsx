import Image from "next/image";
import React from "react";

export default function ServiceCard({
  imgPath,
  title,
  property1 = "",
  property2 = "",
  property3 = "",
}) {
  return (
    <>
      <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
        <div className="boxShadow rounded-xl bg-white p-[30px] dark:bg-btn dark:shadow-none">
          <div className="">
            <Image src={`/${imgPath}`} alt="" width={50} height={50} className="w-[60px]" />
          </div>
          <div className="mt-[20px]">
            <h2 className="text-[24px] text-btn dark:text-white">{title}</h2>
            <ul className="mt-[20px] grid gap-[16px]">
              <li className="flex items-start text-text">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 256 512"
                  className="mr-[8px] mt-[4px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"></path>
                </svg>
                {property1}
              </li>

              <li className="flex items-start text-text">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 256 512"
                  className="mr-[8px] mt-[4px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"></path>
                </svg>
                {property2}
              </li>
              <li className="flex items-start text-text">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 256 512"
                  className="mr-[8px] mt-[4px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"></path>
                </svg>

                {property3}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
