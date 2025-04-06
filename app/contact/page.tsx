import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
                  We'd love to hear from you. Get in touch with our team.
                </p>
              </div>
            </div>
          </div>
        </section>

        <QuoteCard />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-start max-w-5xl mx-auto">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-brand-brown-800">
                    Get in Touch
                  </h2>
                  <p className="text-brand-brown-600">
                    Have questions about our charity work or how you can get
                    involved? Our team is here to help.
                  </p>
                </div>

                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-green-100 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-brand-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-brown-800">
                        Our Address
                      </h3>
                      <p className="text-brand-brown-600">
                        123 Charity Lane, Suite 101
                        <br />
                        London, UK
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-green-100 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-brand-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-brown-800">
                        Email Us
                      </h3>
                      <p className="text-brand-brown-600">
                        <a
                          href={`mailto:${siteConfig.charity.email}`}
                          className="hover:text-brand-green-600 transition-colors"
                        >
                          {siteConfig.charity.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-green-100 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-brand-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-brown-800">
                        Call Us
                      </h3>
                      <p className="text-brand-brown-600">
                        <a
                          href={`tel:${siteConfig.charity.phone}`}
                          className="hover:text-brand-green-600 transition-colors"
                        >
                          {siteConfig.charity.phone}
                        </a>
                        <br />
                        Mon-Fri, 9am-5pm
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-brand-brown-800">
                    Bank Details
                  </h3>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-brand-brown-200">
                    <ul className="space-y-1 text-sm text-brand-brown-700">
                      <li>
                        <span className="font-medium">Account Name:</span>{" "}
                        {siteConfig.bankDetails.accountName}
                      </li>
                      <li>
                        <span className="font-medium">Account No:</span>{" "}
                        {siteConfig.bankDetails.accountNumber}
                      </li>
                      <li>
                        <span className="font-medium">Sort Code:</span>{" "}
                        {siteConfig.bankDetails.sortCode}
                      </li>
                      <li>
                        <span className="font-medium">Bank Name:</span>{" "}
                        {siteConfig.bankDetails.bankName}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Card className="shadow-lg border-brand-brown-200 rounded-xl overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-brand-brown-800">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-brand-brown-600">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="first-name"
                        className="text-brand-brown-700"
                      >
                        First Name
                      </Label>
                      <Input
                        id="first-name"
                        placeholder="First Name"
                        className="h-10 border-2 rounded-lg focus:border-brand-green-300 focus:ring-brand-green-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="last-name"
                        className="text-brand-brown-700"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="last-name"
                        placeholder="Last Name"
                        className="h-10 border-2 rounded-lg focus:border-brand-green-300 focus:ring-brand-green-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-brand-brown-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="h-10 border-2 rounded-lg focus:border-brand-green-300 focus:ring-brand-green-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-brand-brown-700">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Subject"
                      className="h-10 border-2 rounded-lg focus:border-brand-green-300 focus:ring-brand-green-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-brand-brown-700">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="min-h-[120px] border-2 rounded-lg focus:border-brand-green-300 focus:ring-brand-green-300"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-brand-green-600 hover:bg-brand-green-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    Send Message
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
