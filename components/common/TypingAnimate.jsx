"use client";

import { useState, useEffect } from "react";
export default function TypingAnimate() {
  const texts = ["Need help?", "Contact", "Hire Me!"]; // Array of texts
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
      <span>
        <span> {displayedText}</span>
        <span className="typed-cursor">|</span>
      </span>
    </>
  );
}
