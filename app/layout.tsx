import { Open_Sans } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/layout/NavBar";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans", // Matches the variable in globals.css
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="antialiased min-h-screen bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}