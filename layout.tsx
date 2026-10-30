import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "TIMEFALL — Sound / Artists / Production", description: "Heavy sound and raw electronic performance. Book Timefall for your next event." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
