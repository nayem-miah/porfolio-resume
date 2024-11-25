import localFont from "next/font/local";
import "./globals.css";
import "./style.css";
import "./custom.css";
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import Footer from "@/components/common/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body 
        className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}

      >
        <Header/>
        <Sidebar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
