import formatDateTime from "@/utils/dateTimeConverter";
import Image from "next/image";
import Link from "next/link";

export default function BlogList({ blog }) {
  return (
    <>
      <div className="group relative mb-[10px]">
        <div className="h-auto w-full overflow-hidden rounded-xl drop-shadow-lg">
          {blog?.image && (
            <Image
              alt=""
              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[108%]"
              src={blog?.image}
              width={400}
              height={200}
            />
          )}
        </div>
        <div className="mt-[20px]">
          <div className="flex gap-4">
            <div className="inline-block rounded-full bg-white px-[15px] py-[3px] text-[11px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
              {formatDateTime(blog?.pubshied)}
            </div>
            <div className="inline-block rounded-full bg-white px-[15px] py-[3px] text-[11px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
              By Admin
            </div>
          </div>
          <div className="mt-[15px]">
            <Link href={`/blog/${blog?._id}`}>
              <h2 className="text-[28px] font-thin leading-[34px] tracking-wide text-btn transition-all duration-300 dark:text-white dark:hover:text-theme">
                {blog?.title}
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
