import localFont from "next/font/local";
import "./style.css";
import "./custom.css";
import "./globals.css";

import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import Footer from "@/components/common/Footer";
import { SidebarProvider } from "@/providers/SidebarSwitchProvider";
import { Providers } from "@/providers/Providers";

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
  title: "Home || Nayem",
  description:
    "Passion for coding, Self learning capability, Hard working, Profound Analytical ability",
  openGraph: {
    images: ["/og.jpg"],
  },
};

export default async function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <SidebarProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-normal dark:bg-dark`}
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
