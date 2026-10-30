import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "TIMEFALL AUDIO — Sound / Artists / Production", description: "Heavy sound and raw electronic performance. Book Timefall Audio for your next event." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
