import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-akrom.vercel.app"),

  title: {
    default: "Muhammad Akrom Ramadhan | Legal Portfolio",
    template: "%s | Muhammad Akrom Ramadhan",
  },

  description:
    "Portofolio Muhammad Akrom Ramadhan, lulusan Fakultas Hukum Universitas Airlangga dengan pengalaman dalam bantuan hukum, legal research, legal drafting, PPAT/Notaris, dan administrasi peradilan.",

  keywords: [
    "Muhammad Akrom Ramadhan",
    "Akrom Ramadhan",
    "Legal Portfolio",
    "Portfolio Hukum",
    "Lulusan Hukum Universitas Airlangga",
    "Universitas Airlangga",
    "Legal Research",
    "Legal Drafting",
    "Bantuan Hukum",
    "PPAT Notaris",
    "Administrasi Peradilan",
  ],

  authors: [
    {
      name: "Muhammad Akrom Ramadhan",
    },
  ],

  creator: "Muhammad Akrom Ramadhan",

  alternates: {
    canonical: "https://portfolio-akrom.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Muhammad Akrom Ramadhan | Legal Portfolio",
    description:
      "Portofolio profesional Muhammad Akrom Ramadhan — Legal Research, Legal Drafting, Bantuan Hukum, PPAT/Notaris, dan Administrasi Peradilan.",
    url: "https://portfolio-akrom.vercel.app",
    siteName: "Muhammad Akrom Ramadhan",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        {/* GoatCounter Analytics */}
        <Script
          data-goatcounter="https://akromportfolio.goatcounter.com/count"
          src="https://gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
