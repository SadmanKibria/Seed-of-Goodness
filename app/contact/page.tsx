import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

import { QuoteCard } from "@/components/quote-card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig, generateMetadata } from "@/lib/seo-config";

// Generate metadata for this page
export const metadata: Metadata = generateMetadata(
  "Contact Us",
  "Get in touch with Seeds of Goodness. We'd love to hear from you and answer any questions about our charity work.",
  "contact"
);

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-brand-brown-800">
                  Contact Us
                </h1>
                <p className="max-w-[900px] text-brand-brown-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We`&apos;`d love to hear from you. Get in touch with our team.
                </p>
              </div>
            </div>
          </div>
        </section>

        <QuoteCard />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter text-brand-brown-800">
                    Get in Touch
                  </h2>
                  <p className="text-brand-brown-600 text-xl">
                    Have questions about our charity work or how you can get
                    involved? Our team is here to help.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg border border-brand-brown-200">
                  <Mail className="h-12 w-12 text-brand-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-brand-brown-800 mb-2">
                    Email Us
                  </h3>
                  <a
                    href={`mailto:${siteConfig.charity.email}`}
                    className="text-2xl md:text-3xl text-brand-green-600 hover:text-brand-green-700 transition-colors"
                  >
                    {siteConfig.charity.email}
                  </a>
                  <p className="mt-4 text-brand-brown-600">
                    We aim to respond to all inquiries within 24-48 hours.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-brand-brown-200">
                    <Phone className="h-8 w-8 text-brand-green-600 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-brand-brown-800 mb-2">
                      Call Us
                    </h3>
                    <a
                      href={`tel:${siteConfig.charity.phone}`}
                      className="text-xl text-brand-green-600 hover:text-brand-green-700 transition-colors"
                    >
                      {siteConfig.charity.phone}
                    </a>
                    <p className="mt-2 text-sm text-brand-brown-600">
                      Mon-Fri, 9am-5pm
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border border-brand-brown-200">
                    <MapPin className="h-8 w-8 text-brand-green-600 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-brand-brown-800 mb-2">
                      Our Address
                    </h3>
                    <p className="text-brand-brown-600">
                      {siteConfig.charity.address}
                    </p>
                  </div>
                </div>

                <div className="bg-brand-green-50 p-6 rounded-xl border border-brand-green-200 mt-8">
                  <h3 className="text-xl font-bold text-brand-brown-800 mb-4">
                    Bank Details
                  </h3>
                  <ul className="space-y-1 text-brand-brown-700">
                    <li>
                      <span className="font-medium">Account Name:</span>{" "}
                      {siteConfig.charity.bankDetails.accountName}
                    </li>
                    <li>
                      <span className="font-medium">Account No:</span>{" "}
                      {siteConfig.charity.bankDetails.accountNumber}
                    </li>
                    <li>
                      <span className="font-medium">Sort Code:</span>{" "}
                      {siteConfig.charity.bankDetails.sortCode}
                    </li>
                    <li>
                      <span className="font-medium">Bank Name:</span>{" "}
                      {siteConfig.charity.bankDetails.bankName}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
