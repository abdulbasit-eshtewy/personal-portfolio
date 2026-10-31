import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Abdulbasit | Software Engineer", template: "%s | Abdulbasit" },
  description: "Portfolio of Abdulbasit Eshtewy — software engineer focused on backend systems and modern web development.",
  openGraph: { title: "Abdulbasit | Software Engineer", description: "Software engineering portfolio", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}