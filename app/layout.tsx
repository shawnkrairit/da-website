import type { Metadata } from "next";
import { Noto_Sans_SC, Sarabun, Tinos } from "next/font/google";
import { getLocale } from "next-intl/server";
import "./globals.css";

// Brand Identity Guide: Times New Roman for English, Sarabun for Thai.
// Tinos is the metric-compatible web fallback where Times New Roman is not installed.
const sarabun = Sarabun({
  variable: "--font-sarabun",
  weight: ["400", "500", "600"],
  subsets: ["latin", "thai"],
});

const tinos = Tinos({
  variable: "--font-tinos",
  weight: "400",
  subsets: ["latin"],
});

const noto_sans_sc = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dej-Udom & Associates - Thailand Law Firm in Bangkok | Corporate, IP & Immigration Lawyers",
  description: "Independent Bangkok law firm providing corporate, immigration, intellectual property, tax and dispute resolution legal services for international clients in Thailand.",
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/icons/apple-icon.png" },
    ],
  },
};

const HTML_LANG: Record<string, string> = { en: "en", th: "th", cn: "zh-Hans" };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={HTML_LANG[locale] ?? "en"}
      className={`light ${sarabun.variable} ${tinos.variable} ${noto_sans_sc.variable} h-full antialiased bg-paper`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
