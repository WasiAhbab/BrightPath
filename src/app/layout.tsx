import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "BrightPath | Tuition & Academic Support in Dhaka",
  description: "Explore BrightPath courses for primary, secondary and HSC students. Find the right class and enquire with our team."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar/><main>{children}</main><Footer/></body></html>;
}
