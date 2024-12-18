import localFont from "next/font/local";
import { Inter, Rethink_Sans } from 'next/font/google';

export const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const rethinkSans = Rethink_Sans({
  subsets: ['latin'],
  variable: '--font-rethink-sans',
  weight: "400",
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  // weight: "400 700",
});