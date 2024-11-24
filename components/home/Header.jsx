"use client";
import Image from "next/image";

import { useState, useEffect } from "react";

export default function Header() {
  const texts = ["Need help?", "Contact now", "Hire Me!"]; // Array of texts
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Tracks the current text index
  const [displayedText, setDisplayedText] = useState(""); // Text displayed on the screen
  const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting state
  const typingSpeed = 100; // Speed for typing characters (ms)
  const deletingSpeed = 50; // Speed for deleting characters (ms)
  const pauseAfterTyping = 1200; // Pause after typing a word (ms)
  const pauseAfterDeleting = 300; // Pause after deleting a word (ms)

  useEffect(() => {
    let timeout;

    const handleTyping = () => {
      const currentText = texts[currentTextIndex];

      if (isDeleting) {
        // Deleting logic: Remove one character at a time
        setDisplayedText((prev) => prev.slice(0, -1));

        if (displayedText === "") {
          // After deleting, move to the next word
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Cycle through texts
          timeout = setTimeout(handleTyping, pauseAfterDeleting); // Pause before typing next word
          return;
        }
      } else {
        // Typing logic: Add one character at a time
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1));

        if (displayedText === currentText) {
          // Pause briefly after fully typing the word
          timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
          return;
        }
      }

      // Adjust speed based on whether typing or deleting
      timeout = setTimeout(
        handleTyping,
        isDeleting ? deletingSpeed : typingSpeed
      );
    };

    timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [displayedText, isDeleting, currentTextIndex]);

  return (
    <>
      <header>
        <div className="container mx-auto pt-[30px]">
          <div className="flex justify-between rounded-[10px] bg-white py-[20px] dark:bg-card">
            <div className="logo flex items-center px-[30px]">
              <Image src="/n.png" alt="logo" width={200} height={200} />
            </div>
            <menu className="hidden items-center md:flex">
              <ul className="flex gap-4">
                <li>
                  <a
                    aria-current="page"
                    className="font-semibold text-theme"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold text-text transition-all duration-300 hover:text-btn dark:hover:text-white"
                    href="/about"
                  >
                    About Us
                  </a>
                </li>
                <li className="w-[100px]">
                  <a
                    className="font-semibold text-text transition-all duration-300 hover:text-btn dark:hover:text-white"
                    href="/contact"
                  >
                    <span>
                      <span> {displayedText}</span>
                      <span className="typed-cursor">|</span>
                    </span>
                  </a>
                </li>
              </ul>
            </menu>
            <div className="flex items-center">
              <div className="flex items-center gap-4 px-[30px]">
                <button className="hidden items-center gap-3 md:flex">
                  <p>
                    <span className="text-btn dark:text-theme">Dark</span>
                    <span className="text-btn dark:text-white"> / </span>
                    <span className="text-theme dark:text-white">Light</span>
                  </p>
                  <div>
                    <Image src="/sun.svg" alt="sun" width={30} height={30} />
                  </div>
                </button>
                <button className="rounded-full border border-[#919295] p-[10px] text-[25px]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-text dark:text-text"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
