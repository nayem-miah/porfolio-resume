import Footer from "@/components/common/Footer";
import Header from "@/components/home/Header";
import Main from "@/components/home/Main";
import Sidebar from "@/components/home/Sidebar";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="dark">
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </div>

      {/* <style type="text/css" data-typed-js-css="true">
      .typed-cursor {
        opacity: 1;
      }
      .typed-cursor.typed-cursor--blink {
        animation: typedjsBlink 0.7s infinite;
        -webkit-animation: typedjsBlink 0.7s infinite;
        animation: typedjsBlink 0.7s infinite;
      }
      @keyframes typedjsBlink {
        50% {
          opacity: 0;
        }
      }
      @-webkit-keyframes typedjsBlink {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }</style
    > */}

      <canvas
        width="1280"
        height="15"
        style={{
          position: "fixed",
          padding: 0,
          margin: 0,
          right: 0,
          left: 0,
          top: 0,
          zIndex: 100001,
          display: "none",
          opacity: 0.05,
        }}
      ></canvas>
    </>
  );
}
