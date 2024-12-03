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
import getURL from "@/utils/getUrl";

export default function ShareSocialMedia() {
  const pathname = usePathname();
  const currentURL = getURL(pathname);
  return (
    <>
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
