import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL('https://fast-mock-data-generator.vercel.app'),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fast-mock-data-generator.vercel.app",
    title: "Fast Mock Data Generator - Generate Realistic Test Data Instantly",
    description: "Free online mock data generator for developers. Generate realistic test data instantly in your browser.",
    siteName: "Fast Mock Data Generator",
    images: [{
      url: "https://fast-mock-data-generator.vercel.app/og-image.png",
      width: 1200,
      height: 630,
      alt: "Fast Mock Data Generator - Free Mock Data Generator Tool"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Mock Data Generator",
    description: "Generate realistic test data instantly - Free tool for developers",
    images: ["https://fast-mock-data-generator.vercel.app/og-image.png"]
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
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
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
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NBM1FLRPDW"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NBM1FLRPDW');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
