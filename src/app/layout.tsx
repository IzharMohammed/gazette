import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { FloatingContact } from "@/components/floating-contact";
import { Header } from "@/components/header";
import { MobileActions } from "@/components/mobile-actions";
import { siteConfig } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Gazette Name Change & Newspaper Publication India`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "India's trusted legal documentation service for Gazette Name Change, Surname Modification, Gender Change, and Newspaper Advertisements pan India. 100% online process.",
  keywords: [
    "Gazette Name Change Online India",
    "Gazette Notification for Name Change",
    "Surname Change Gazette",
    "Gender Change Gazette",
    "Newspaper Publication for Name Change",
    "Gazette Publication Services India",
    "Name Change Affidavit Online",
    "Department of Publication Civil Lines Delhi",
    "The Gazette of India Part IV",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | India's Gazette Publication Service`,
    description:
      "Statutory assistance for Gazette of India name change notification and nationwide newspaper advertisements.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Gazette Publication Services India`,
    description:
      "Statutory assistance for Gazette of India name change notification and nationwide newspaper advertisements.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceArea: {
      "@type": "AdministrativeArea",
      name: "India",
    },
    priceRange: "₹₹",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <FloatingContact />
        <MobileActions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
