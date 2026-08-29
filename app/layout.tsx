import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import { LocaleProvider } from "@/components/providers/locale-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SplashLoader } from "@/components/ui/splash-loader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahmoud Saq Allah | MERN Stack Developer",
  description:
    "Portfolio of Mahmoud Saq Allah — MERN Stack Developer building modern web applications. بورتوفوليو محمود ساق الله — مطور MERN Stack",
  keywords: [
    "Mahmoud Saq Allah",
    "محمود ساق الله",
    "MERN Stack",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Mahmoud Saq Allah" }],
  openGraph: {
    title: "Mahmoud Saq Allah | MERN Stack Developer",
    description:
      "Portfolio of Mahmoud Saq Allah — MERN Stack Developer building modern web applications.",
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${inter.variable} ${cairo.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LocaleProvider>
            <SplashLoader />
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
