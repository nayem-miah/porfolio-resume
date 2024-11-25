"use client";

import { useEffect, useState, useRef } from "react";

export default function CountExpe({ targetValue }) {
  const [projectCount, setProjectCount] = useState(0); // Initialize the project count state
  const [isVisible, setIsVisible] = useState(false); // Track visibility state
  const elementRef = useRef(null); // Reference to the element
  const incrementSpeed = 50; // Time in milliseconds between increments

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Element is visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current); // Observe the element
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current); // Cleanup observer
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Start counting only when visible

    let count = 0;

    const interval = setInterval(() => {
      count += 1; // Increment count

      if (count > targetValue) {
        clearInterval(interval); // Stop the interval when the target is reached
      } else {
        setProjectCount(count); // Update state
      }
    }, incrementSpeed);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isVisible, targetValue, incrementSpeed]);

  return (
    <div ref={elementRef}>
      <span>{projectCount}</span>+
    </div>
  );
}
