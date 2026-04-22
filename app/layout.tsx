import type { Metadata } from "next";
import { Libre_Baskerville, Noto_Sans_SC, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const libre = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
});

const noto_sans_thai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["latin"],
});

const noto_sans_sc = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dej-Udom & Associates - Thailand Law Firm in Bangkok | Corporate, IP & Immigration Lawyers",
  description: "Independent Bangkok law firm providing corporate, immigration, intellectual property, tax and dispute resolution legal services for international clients in Thailand.",
  icons: 'favicon.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`light ${libre.variable} ${noto_sans_thai.variable} ${noto_sans_sc.variable} h-full antialiased bg-forest-deep`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
