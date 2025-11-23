import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/layout/Navbar";
import Footer from "@/Components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Riyanshi Fashion",
  description: "Riyanshi Fashion - Premium sarees and ethnic wear collections.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
