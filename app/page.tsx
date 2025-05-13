import Link from "next/link";
import { ArrowRight, Heart, Home, MessageCircle, Users } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DonationForm } from "@/components/donation-form";
import { FeaturedCauses } from "@/components/featured-causes";
import { NewsSection } from "@/components/news-section";
import { QuoteCard } from "@/components/quote-card";
import { BankTransferDetails } from "@/components/bank-transfer-details";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { generateMetadata, generateDonationSchema } from "@/lib/seo-config";
import { formatCurrency } from "@/lib/utils";

// Generate metadata for this page
export const metadata: Metadata = generateMetadata(
  "Home",
  "Seeds of Goodness is an Islamic charity dedicated to providing humanitarian aid to those in need, with a focus on Gaza emergency relief. Donate today to make a difference."
);

// Generate structured data for donation
const donationSchema = generateDonationSchema();

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section with Image Background */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background Image instead of Video */}
          <div className="absolute inset-0 w-full h-full overflow-hidden bg-black/50 z-0">
            <img
              src="/pics/4.png"
              alt="Seeds of Goodness - Hero Background"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content overlay */}
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 mb-2">
                  Urgent Appeal
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-brown-800">
                  Supporting Those in Need in Gaza
                </h1>
                <p className="text-brand-brown-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Seeds of Goodness is dedicated to providing humanitarian aid
                  to those affected by crisis and conflict. Our team is on the
                  ground in Gaza delivering essential support.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/donate">
                    <Button className="bg-brand-green-600 hover:bg-brand-green-700 text-white rounded-lg px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all duration-300">
                      Donate Now
                    </Button>
                  </Link>
                  <Link href="/causes">
                    <Button
                      variant="outline"
                      className="rounded-lg px-8 py-6 text-lg border-2 border-brand-brown-300 text-brand-brown-700 hover:bg-brand-green-50 hover:border-brand-green-300 transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <QuoteCard />

        {/* Gaza Emergency Appeal Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600">
                  Urgent Appeal
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-brand-brown-800">
                  Gaza Emergency Relief
                </h2>
                <p className="max-w-[900px] text-brand-brown-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Families in Gaza are facing a humanitarian crisis. Your
                  donation can provide essential food, clean water, medical
                  supplies, and shelter to those affected.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <div className="flex justify-between text-sm">
                  <div>Raised: {formatCurrency(69000)}</div>
                  <div>Goal: {formatCurrency(500000)}</div>
                </div>
                <Progress value={49} className="h-2 w-full bg-brand-brown-100">
                  <div className="h-full bg-brand-green-500 rounded-full"></div>
                </Progress>
              </div>
              <Link href="/donate?cause=gaza">
                <Button className="bg-brand-green-600 hover:bg-brand-green-700 text-white rounded-lg px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all duration-300">
                  Donate to Gaza Relief
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <FeaturedCauses />

        {/* Donation Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-brand-brown-800">
                  Make a Difference Today
                </h2>
                <p className="text-brand-brown-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your donation, no matter how small, can make a significant
                  impact on the lives of those in need. Choose a cause that
                  matters to you and contribute to positive change.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-green-100 p-2 rounded-full">
                      <Heart className="h-5 w-5 text-brand-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-brown-700">
                        100% Donation Policy
                      </h3>
                      <p className="text-sm text-brand-brown-500">
                        Every penny of your donation goes directly to those in
                        need.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-green-100 p-2 rounded-full">
                      <Heart className="h-5 w-5 text-brand-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-brown-700">
                        Trusted Partners
                      </h3>
                      <p className="text-sm text-brand-brown-500">
                        We work with trusted local partners to ensure aid
                        reaches those who need it most.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-green-100 p-2 rounded-full">
                      <Heart className="h-5 w-5 text-brand-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-brown-700">
                        Immediate Impact
                      </h3>
                      <p className="text-sm text-brand-brown-500">
                        Your donation is put to work immediately to help those
                        in crisis.
                      </p>
                    </div>
                  </div>
                </div>
                <BankTransferDetails />
              </div>
              <div>
                <DonationForm />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section with Video Background */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Video Background with stronger overlay */}
          <div className="absolute inset-0 w-full h-full overflow-hidden bg-black/60 z-0">
            <iframe
              className="w-full h-full pointer-events-none"
              src="https://www.youtube.com/embed/_7L8L7LKwn4?autoplay=1&mute=1&loop=1&playlist=_7L8L7LKwn4&controls=0&modestbranding=1&showinfo=0&rel=0"
              title="Background Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>

          {/* Content overlay */}
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  Our Impact
                </h2>
                <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Through the generosity of our donors, we&apos;ve been able to
                  make a real difference in communities worldwide.
                </p>
              </div>
              <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-8">
                <div className="flex flex-col items-center space-y-2 bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <Home className="h-10 w-10 text-brand-green-400" />
                  <h3 className="text-xl font-bold text-white">1,200+</h3>
                  <p className="text-sm text-white/80">Shelters Built</p>
                </div>
                <div className="flex flex-col items-center space-y-2 bg-white/30 backdrop-blur-md p-6 rounded-xl border-2 border-brand-green-400 shadow-lg scale-105">
                  <Users className="h-12 w-12 text-brand-green-400 animate-pulse" />
                  <h3 className="text-2xl font-extrabold text-brand-green-400 uppercase tracking-wide">
                    50,000+
                  </h3>
                  <p className="text-base text-white font-medium">
                    We aim to have
                    <br />
                    over 50,000 people helping
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-2 bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <MessageCircle className="h-10 w-10 text-brand-green-400" />
                  <h3 className="text-xl font-bold text-white">25+</h3>
                  <p className="text-sm text-white/80">Countries Reached</p>
                </div>
                <div className="flex flex-col items-center space-y-2 bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                  <Heart className="h-10 w-10 text-brand-green-400" />
                  <h3 className="text-xl font-bold text-white">10,000+</h3>
                  <p className="text-sm text-white/80">Donors Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <NewsSection />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(donationSchema) }}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
