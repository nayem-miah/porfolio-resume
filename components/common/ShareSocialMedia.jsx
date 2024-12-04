"use client";
import { usePathname } from "next/navigation";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

export default function ShareSocialMedia() {
  const pathname = usePathname();
  const currentURL = `https://nayemjs.vercel.app${pathname}`;

  return (
    <>
      <p className="text-theme">Share on social media</p>
      <FacebookShareButton url={currentURL}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={currentURL}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={currentURL}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </>
  );
}
