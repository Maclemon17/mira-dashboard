import type { Metadata } from "next";;
import "./globals.css";
import { geistMono, geistSans, rethinkSans } from "./font";

export const metadata: Metadata = {
  title: "The ChatGPT of Businesses",
  description: "Mira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rethinkSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
