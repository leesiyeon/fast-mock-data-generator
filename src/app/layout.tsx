import type { Metadata } from "next";
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
  title: {
    default: "Fast Mock Data Generator - Generate Realistic Test Data Instantly",
    template: "%s | Fast Mock Data Generator"
  },
  description: "Free online mock data generator for developers. Generate realistic test data instantly in your browser. Supports 60+ data types including names, emails, dates, and more. No signup required.",
  keywords: ["mock data", "fake data", "test data generator", "api testing", "json generator", "dummy data", "faker", "development tools"],
  authors: [{ name: "Fast Mock Data Generator" }],
  creator: "Fast Mock Data Generator",
  publisher: "Fast Mock Data Generator",
  metadataBase: new URL('https://fastmockdata.com'), // 나중에 실제 도메인으로 변경
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Fast Mock Data Generator - Generate Realistic Test Data Instantly",
    description: "Free online mock data generator for developers. Generate realistic test data instantly in your browser.",
    siteName: "Fast Mock Data Generator",
    images: [{
      url: "/og-image.png", // 나중에 이미지 추가
      width: 1200,
      height: 630,
      alt: "Fast Mock Data Generator"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Mock Data Generator",
    description: "Generate realistic test data instantly - Free tool for developers",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  verification: {
    google: "xoHssXt3pbecMM_vnU50q5z6hlRJ6Vq8oSO0_P4oQ-Q",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-1014042036964348" />
        <meta name="google-site-verification" content="xoHssXt3pbecMM_vnU50q5z6hlRJ6Vq8oSO0_P4oQ-Q" />
        <meta name="naver-site-verification" content="c5fa0bd11bb3b4e4fdbbda3a15b05c5ef0a72743" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
