"use client";
import { useFormStatus } from "react-dom";

export default function ContactButton() {
  const { pending } = useFormStatus();

  console.log('pending..............',pending)
  return (
    <>
      {/* <button
        disabled={pending}
        type="submit"
        className={`${
          pending && "animate-pulse"
        } bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4`}
      >
        {pending ? "Processing" : "Login"}
      </button> */}

      <button type="submit" disabled={pending} className={`${pending && "animate-pulse"} rounded-full border-2 border-theme bg-theme px-[30px] py-[10px] font-medium text-btn transition-all duration-300 dark:hover:bg-transparent dark:hover:text-theme`}>
    
        {pending ? "Processing" : "Send Message"}
      </button>
    </>
  );
}
