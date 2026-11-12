import type { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "SOLV | Strategic Direction & Advisory",
  description:
    "SOLV brings clarity to complex business, property, and personal matters. Strategic guidance across assets, corporate restructuring, and generational succession.",
  keywords: [
    "Strategic Advisory",
    "Real Estate Advisory Gurugram",
    "Wealth & Inheritance Advisory",
    "Succession & Legacy Planning",
    "Family Property Resolution",
    "Business Restructuring & Insolvency",
    "Senior Citizen Retirement Advisory",
    "NRI Property & Asset Advisory",
    "Corporate Governance",
    "Gurugram Advisory Firm",
    "M3M Urbana Advisory",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SOLV | Strategic Direction & Advisory",
    description:
      "SOLV brings clarity to complex business, property, and personal matters. Strategic guidance across assets, corporate restructuring, and generational succession.",
    url: "https://solvpartners.in",
    siteName: "SOLV",
    images: [
      {
        url: "/about_hero_office.jpg",
        width: 1200,
        height: 630,
        alt: "SOLV Strategic Direction & Advisory",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLV | Strategic Direction & Advisory",
    description:
      "SOLV brings clarity to complex business, property, and personal matters. Strategic guidance across assets, corporate restructuring, and generational succession.",
    images: ["/about_hero_office.jpg"],
  },
};

export default function Page() {
  return <HomeClient />;
}
