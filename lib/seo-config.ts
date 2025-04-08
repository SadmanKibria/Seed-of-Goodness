/**
 * SEO Configuration
 *
 * This file contains centralised configuration for the website's SEO,
 * charity information and structured data for search engines.
 *
 * @author Sadman Kibria (https://sadmankibria.com)
 */

export const siteConfig = {
  // Basic site information
  name: "Seeds of Goodness",
  url: "https://seedsofgoodness.org",
  ogImage: "https://seedsofgoodness.org/logo.png",
  description:
    "Islamic charity dedicated to providing humanitarian aid to those in need, with a focus on Gaza emergency relief.",

  // Information for portfolio showcase
  developer: {
    name: "Sadman Kibria",
    url: "https://sadmankibria.com",
    github: "https://github.com/sadmankibria",
    linkedin: "https://linkedin.com/in/sadmankibria",
    youtube: "https://www.youtube.com/@SadmanKibria",
    portfolio: "https://sadmankibria.com/portfolio",
  },

  // Charity details
  charity: {
    regNumber: "1211623",
    email: "seedofgood2024@gmail.com",
    phone: "07894875700",
    whatsapp: "+447894875700",
    address: "Unit 4, Marbridge House, Harolds Road, Harlow, Essex, CM19 5BJ",

    // Banking information
    bankDetails: {
      accountName: "SEEDS OF GOODNESS",
      accountNumber: "46733463",
      sortCode: "30-99-50",
      bankName: "Lloyds Bank",
    },

    // Social media profiles
    socialLinks: {
      facebook: "https://facebook.com/seedsofgoodness",
      twitter: "https://twitter.com/seedsofgoodness",
      instagram: "https://instagram.com/seedsofgoodness",
    },
  },

  // Keywords for SEO
  keywords: [
    "Islamic charity",
    "Gaza relief",
    "humanitarian aid",
    "Seeds of Goodness",
    "donate to Gaza",
    "Sadman Kibria",
    "Sadman",
    "Kibria",
    "Muslim charity UK",
    "Palestine aid",
    "charity website",
    "Islamic relief",
    "Gaza emergency",
    "humanitarian crisis",
    "charity donation",
  ],
};

/**
 * Generates structured data for the organisation (JSON-LD)
 * This helps search engines understand the organisation better
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [
      siteConfig.charity.socialLinks.facebook,
      siteConfig.charity.socialLinks.twitter,
      siteConfig.charity.socialLinks.instagram,
      siteConfig.developer.url, // Link to my portfolio for additional visibility
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.charity.phone,
      email: siteConfig.charity.email,
      contactType: "customer service",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.charity.address,
      addressCountry: "UK",
    },
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.developer.name,
      url: siteConfig.developer.url,
    },
  };
}

/**
 * Generates metadata for pages
 * @param title - Page title
 * @param description - Page description
 * @param path - Page path (optional)
 */
export function generateMetadata(
  title: string,
  description: string,
  path?: string
) {
  const baseUrl = siteConfig.url;
  const url = path ? `${baseUrl}/${path}` : baseUrl;

  return {
    title: `${title} | ${siteConfig.name} | Developed by ${siteConfig.developer.name}`,
    description: description,
    keywords: siteConfig.keywords,
    authors: [
      { name: siteConfig.developer.name, url: siteConfig.developer.url },
    ],
    creator: siteConfig.developer.name,
    publisher: siteConfig.name,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: description,
      url: url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description: description,
      images: [siteConfig.ogImage],
      creator: `@${siteConfig.developer.name.replace(/\s+/g, "")}`,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Generates structured data for donation pages (JSON-LD)
 * This helps search engines understand the donation process
 */
export function generateDonationSchema() {
  return {
    "@context": "https://schema.org/",
    "@type": "DonateAction",
    name: `Donate to ${siteConfig.name}`,
    description:
      "Support our humanitarian efforts and make a difference in the lives of those in need.",
    agent: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
    },
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/donate`,
      inLanguage: "en-GB",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    instrument: {
      "@type": "PaymentMethod",
      name: "Credit Card, PayPal, Bank Transfer",
    },
    result: {
      "@type": "MonetaryAmount",
      currency: "GBP",
      description: "Your donation helps provide essential aid to those in need",
    },
    potentialAction: {
      "@type": "DonateAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/donate`,
      },
    },
  };
}

/**
 * Format currency values consistently
 * @param amount - The amount to format
 * @param currency - The currency code (default: GBP)
 */
export function formatCurrency(amount: number, currency = "GBP") {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currency,
  }).format(amount);
}
