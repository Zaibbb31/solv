import type { Metadata } from "next";
import "./globals.css";
import DisclaimerModal from "@/app/component/disclaimer-modal";
import ScrollToTop from "@/app/component/scroll-to-top";

export const metadata: Metadata = {
  metadataBase: new URL("https://solvpartners.in"),
  title: {
    default: "SOLV | Strategic Direction & Advisory",
    template: "%s | SOLV",
  },
  description:
    "SOLV brings clarity to complex business, property, and personal matters. Strategic guidance across assets, corporate restructuring, and generational succession.",
  keywords: [
    "SOLV",
    "SOLV Partners",
    "Strategic Advisory",
    "Real Estate Advisory Gurugram",
    "Wealth & Inheritance Advisory",
    "Succession & Legacy Planning",
    "Family Property & Dispute Resolution",
    "Business Restructuring & Insolvency",
    "Senior Citizen Retirement Advisory",
    "NRI Property & Asset Advisory",
    "Commercial Advisory Delhi NCR",
    "M3M Urbana Gurugram",
  ],
  authors: [{ name: "SOLV Partners LLP" }],
  creator: "SOLV Partners LLP",
  publisher: "SOLV Partners LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://solvpartners.in",
    siteName: "SOLV",
    title: "SOLV | Strategic Direction & Advisory",
    description:
      "Clarity in complexity. Strategic guidance across assets, business, and succession.",
    images: [
      {
        url: "/about_hero_office.jpg",
        width: 1200,
        height: 630,
        alt: "SOLV Strategic Direction & Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLV | Strategic Direction & Advisory",
    description:
      "Clarity in complexity. Strategic guidance across assets, business, and succession.",
    images: ["/about_hero_office.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="font-sans h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ScrollToTop />
        <DisclaimerModal />
        {children}
      </body>
    </html>
  );
}
