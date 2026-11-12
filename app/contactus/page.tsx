import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us | Schedule a Confidential Discussion",
  description:
    "Reach out to SOLV for considered, strategic guidance across business, real estate, and family succession. Visit our Gurugram office at M3M Urbana or schedule a confidential consultation.",
  keywords: [
    "Contact SOLV",
    "Schedule Advisory Consultation",
    "M3M Urbana Office Gurugram",
    "SOLV Phone Number",
    "SOLV Email Address",
    "Strategic Legal Consultation",
  ],
  alternates: {
    canonical: "/contactus",
  },
  openGraph: {
    title: "Contact Us | SOLV Strategic Advisory",
    description:
      "Connect with SOLV's senior advisory practice for guidance on complex business, real estate, and succession challenges.",
    url: "https://solvpartners.in/contactus",
    siteName: "SOLV",
    images: [
      {
        url: "/contact_office_lounge.jpg",
        width: 1200,
        height: 630,
        alt: "SOLV Executive Office - Gurugram",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | SOLV Strategic Advisory",
    description:
      "Connect with SOLV's senior advisory practice for guidance on complex business, real estate, and succession challenges.",
    images: ["/contact_office_lounge.jpg"],
  },
};

export default function Page() {
  return <ContactClient />;
}
