import type React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";

import { siteConfig, generateOrganizationSchema } from "@/lib/seo-config";
import { WhatsAppButton } from "@/components/whatsapp-button";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const organizationSchema = generateOrganizationSchema();

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Islamic Charity Supporting Gaza Relief | ${siteConfig.developer.name}`,
    template: `%s | ${siteConfig.name} | ${siteConfig.developer.name}`,
  },
  description: `${siteConfig.name} is an Islamic charity dedicated to providing humanitarian aid to those in need, with a focus on Gaza emergency relief. Donate today to make a difference. Developed by ${siteConfig.developer.name}.`,
  icons: "/logo.png",
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.developer.name, url: siteConfig.developer.url }],
  creator: siteConfig.developer.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    title: `${siteConfig.name} | Islamic Charity Supporting Gaza Relief | Developed by ${siteConfig.developer.name}`,
    description: `${siteConfig.name} is an Islamic charity dedicated to providing humanitarian aid to those in need, with a focus on Gaza emergency relief. Donate today to make a difference.`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Islamic Charity Supporting Gaza Relief`,
    description: `${siteConfig.name} is an Islamic charity dedicated to providing humanitarian aid to those in need, with a focus on Gaza emergency relief. Donate today to make a difference.`,
    creator: `@${siteConfig.developer.name.replace(/\s+/g, "")}`,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics - Replace with your own tracking ID */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Additional meta tags for SEO */}
        <meta name="author" content={siteConfig.developer.name} />
        <meta name="developer" content={siteConfig.developer.name} />
        <meta name="application-name" content={siteConfig.name} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#4CAF50" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#4CAF50" />
      </head>
      <body className={inter.className}>
        {children}
        <WhatsAppButton phoneNumber={siteConfig.charity.whatsapp} />
      </body>
    </html>
  );
}
