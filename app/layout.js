// import localFont from "next/font/local";
import "./style.css";
import "./custom.css";
import "./globals.css";

import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import Footer from "@/components/common/Footer";
import { SidebarProvider } from "@/providers/SidebarSwitchProvider";
import { Providers } from "@/providers/Providers";



export const metadata = {
  title: "Home || Nayem Miah | Aspiring Full-Stack Developer | React, Next.js, & Django Expert",
  description:
    "Nayem Miah, a passionate Full-Stack developer with two years of experience, specializes in React, Next.js, and Django",
  openGraph: {
    images: ["/og.jpg"],
  },
};


export default async function RootLayout({ children }) {

  return (
    <html suppressHydrationWarning lang="en">
      <SidebarProvider>
        <body
          className={`antialiased bg-normal dark:bg-dark`}
        >
          <Providers>
            <Header />
            <Sidebar />
            {children}
            <Footer />
          </Providers>
        </body>
      </SidebarProvider>
    </html>
  );
}
