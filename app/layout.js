import localFont from "next/font/local";
import "./globals.css";
import "./style.css";
import "./custom.css";
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import Footer from "@/components/common/Footer";
import { SidebarProvider } from "@/providers/SidebarSwitchProvider";


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
  title: "Home|| Nayem",
  description:
    "Passion for coding, Self learning capability, Hard working, Profound Analytical ability",
  openGraph: {
    images: [
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    ],
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      
      <SidebarProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
        >
          <Header />
          <Sidebar />
          {children}
          <Footer />
        </body>
      </SidebarProvider>
    </html>
  );
}
