import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsappChat from "@/components/WhatsappChat";
import ScrollProgress from "@/components/ScrollProgress";



export const metadata = {
  title: "Reya AV",
  description: "Leading Audio-Visual, LED & Lighting System Integrators in Bangalore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white"
        
      >
        <ScrollProgress />
        <Navbar/>
        {children}
        <ScrollToTop/>
        <Footer/>
        <WhatsappChat/>
      </body>
    </html>
  );
}
