import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import PlausibleScript from "./components/PlausibleScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amp Spot - Premium Audio Plugins",
  description: "Professional audio plugins for music producers and sound engineers. High-quality VST effects and instruments.",
  keywords: "VST, audio plugins, music production, sound design, DAW",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amp-spot.com",
    title: "Amp Spot - Premium Audio Plugins",
    description: "Professional audio plugins for music producers and sound engineers. High-quality VST effects and instruments.",
    siteName: "Amp Spot",
    images: [
      {
        url: "https://amp-spot.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amp Spot - Premium Audio Plugins",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amp Spot - Premium Audio Plugins",
    description: "Professional audio plugins for music producers and sound engineers. High-quality VST effects and instruments.",
    images: ["https://amp-spot.com/og-image.jpg"],
    creator: "@ampspot",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased animated-bg`}
      >
        {children}
        <PlausibleScript />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgba(20, 20, 30, 0.9)',
              color: '#fff',
              border: '1px solid rgba(255, 140, 0, 0.3)',
              borderRadius: '12px',
            },
            success: {
              iconTheme: {
                primary: '#FF8C00',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
