"use client";

import { useEffect, useState } from "react";

export default function CountExpe() {
  const [projectCount, setProjectCount] = useState(0); // Initialize the project count state
  const [experinceCount, setExperinceCount] = useState(0); // Initialize the project count state
  const targetProjectCount = 50; // Replace with your desired target number
  const incrementSpeed = 50; // Time in milliseconds between increments
  const targetExpeCount = 2;
  useEffect(() => {
    let count = 0;

    const interval = setInterval(() => {
      count += 1; // Increment count

      if (count > targetProjectCount) {
        clearInterval(interval); // Stop the interval when the target is reached
      } else {
        setProjectCount(count); // Update state
      }
    }, incrementSpeed);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [targetProjectCount, incrementSpeed]);

  useEffect(() => {
    let count = 0;

    const interval = setInterval(() => {
      count += 1;
      if (count > targetExpeCount) {
        clearInterval(interval);
      } else {
        setExperinceCount(count);
      }
    }, incrementSpeed);

    return () => clearInterval(interval);
  }, [targetExpeCount, incrementSpeed]);

  return (
    <>
      <div className="mt-[25px] gap-[30px] md:flex">
        <div className="flex items-center gap-[20px]">
          <h2 className="text-[50px] text-theme">
            <div>
              <div className="w-[80px]">
                <span>{projectCount}</span>+
              </div>
            </div>
          </h2>
          <p className="text-[14px] leading-[24px] text-text">
            Projects <br />
            Completed
          </p>
        </div>
        <div className="flex items-center gap-[20px]">
          <h2 className="text-[50px] text-theme">
            <div>
              <div className="w-[60px]">
                <span>{experinceCount}</span>+
              </div>
            </div>
          </h2>
          <p className="text-[14px] leading-[24px] text-text">
            Years of <br />
            Experience
          </p>
        </div>
      </div>
    </>
  );
}
