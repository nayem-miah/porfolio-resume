"use client";
import { useFormStatus } from "react-dom";

export default function ContactButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        type="submit"
        disabled={pending}
        className={`${
          pending && "animate-pulse"
        } rounded-full border-2 border-theme bg-theme px-[30px] py-[10px] font-medium text-btn transition-all duration-300 dark:hover:bg-transparent dark:hover:text-theme`}
      >
        {pending ? "Processing" : "Send Message"}
      </button>
    </>
  );
}
