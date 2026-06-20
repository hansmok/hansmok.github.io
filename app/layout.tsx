import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hansmok.com"),
  title: "who dis?",
  description: profile.bio,
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
