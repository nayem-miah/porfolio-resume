"use client";
import { useFormStatus } from "react-dom";

export default function CreatingButton({ project }) {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        type="submit"
        disabled={pending}
        className={`${
          pending && "animate-pulse"
        } w-full rounded-lg bg-theme mt-5 px-6 py-2 text-white hover:bg-opacity-90`}
      >
        {project
          ? pending
            ? "Processing"
            : "Create Project"
          : pending
          ? "Processing"
          : "Create Blog"}
      </button>
    </>
  );
}
