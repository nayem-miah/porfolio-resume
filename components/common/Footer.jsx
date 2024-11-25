import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container mx-auto mt-[60px] flex justify-center pb-[40px]">
          <div>
            <p className="text-center text-text">
              Copyright <span className="text-theme">nayemjs</span> ©2024. All
              rights reserved
            </p>
            <div className="mt-[20px] flex justify-center text-center">
              <Image src="/logo.png" height={49} width={200} alt="logo" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
