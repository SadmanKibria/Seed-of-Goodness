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
        {/* Hero Section */}
        {/*
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-brand-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
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
              <div className="mx-auto w-full max-w-[720px] aspect-video overflow-hidden rounded-xl shadow-lg">
                {/* 
                 <img
                  alt="Children receiving humanitarian aid in Gaza"
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1469571486292-b53601010b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                /> 
                */}
        {/*
                <iframe
                  width="720"
                  height="405"
                  src="https://www.youtube.com/embed/9Ap8qz9Lcsk?si=9n2wWSOfq-6vKC8i"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        */}

        <section className="relative w-full h-screen overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <iframe
                className="w-[177.77vh] h-screen md:w-full md:h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                src="https://www.youtube.com/embed/9Ap8qz9Lcsk?autoplay=1&mute=1&loop=1&playlist=9Ap8qz9Lcsk&controls=0&modestbranding=1&showinfo=0&rel=0"
                title="Background Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container h-full px-4 md:px-6 flex items-center">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center text-white">
              <div className="space-y-4 text-center sm:text-left">
                <div className="inline-block rounded-lg bg-red-600 px-3 py-1 text-sm font-medium shadow-md">
                  Urgent Appeal
                </div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight">
                  Supporting Those in Need in Gaza
                </h1>
                <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-xl mx-auto sm:mx-0">
                  Seeds of Goodness is dedicated to providing humanitarian aid
                  to those affected by crisis and conflict. Our team is on the
                  ground in Gaza delivering essential support.
                </p>
                <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-3 mt-4">
                  <Link href="/donate">
                    <Button className="bg-brand-green-600 hover:bg-brand-green-700 text-white px-8 py-4 text-lg shadow-lg">
                      Donate Now
                    </Button>
                  </Link>
                  <Link href="/causes">
                    <Button className="bg-white text-brand-green-700 hover:bg-brand-green-100 px-8 py-4 text-lg shadow-lg border border-white/20">
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
                  supplies and shelter to those affected.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <div className="flex justify-between text-sm">
                  <div>Raised: {formatCurrency(24500)}</div>
                  <div>Goal: {formatCurrency(50000)}</div>
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

        {/* Impact Section */}
        {/*
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-brown-800">
                  Our Impact
                </h2>
                <p className="max-w-[900px] text-brand-brown-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Through the generosity of our donors, we&apos;ve been able to
                  make a real difference in communities worldwide.
                </p>
              </div>
              <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                <div className="flex flex-col items-center space-y-2">
                  <Home className="h-10 w-10 text-brand-green-600" />
                  <h3 className="text-xl font-bold text-brand-brown-700">
                    1,200+
                  </h3>
                  <p className="text-sm text-brand-brown-500">Shelters Built</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Users className="h-10 w-10 text-brand-green-600" />
                  <h3 className="text-xl font-bold text-brand-brown-700">
                    50,000+
                  </h3>
                  <p className="text-sm text-brand-brown-500">People Helped</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MessageCircle className="h-10 w-10 text-brand-green-600" />
                  <h3 className="text-xl font-bold text-brand-brown-700">
                    25+
                  </h3>
                  <p className="text-sm text-brand-brown-500">
                    Countries Reached
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Heart className="h-10 w-10 text-brand-green-600" />
                  <h3 className="text-xl font-bold text-brand-brown-700">
                    10,000+
                  </h3>
                  <p className="text-sm text-brand-brown-500">
                    Donors Worldwide
                  </p>
                </div>
                <div className="mx-auto  max-w-[720px] aspect-video overflow-hidden rounded-xl shadow-lg">
                  <iframe
                    width="720"
                    height="405"
                    src="https://www.youtube.com/embed/_7L8L7LKwn4?si=ee7U5jeu6ds9onyk"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>*/}

        <section className="relative w-full h-[65vh] overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <iframe
              className="w-full h-full pointer-events-none"
              src="https://www.youtube.com/embed/_7L8L7LKwn4?autoplay=1&mute=1&loop=1&playlist=_7L8L7LKwn4&controls=0&modestbranding=1&showinfo=0&rel=0"
              title="Background Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
            <p className="max-w-xl text-lg md:text-xl mb-10">
              Through the generosity of our donors, we&apos;ve been able to make
              a real difference in communities worldwide.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <Home className="h-10 w-10 text-green-300" />
                <h3 className="text-xl font-bold mt-2">1,200+</h3>
                <p className="text-sm">Shelters Built</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-10 w-10 text-green-300" />
                <h3 className="text-xl font-bold mt-2">50,000+</h3>
                <p className="text-sm">People Helped</p>
              </div>
              <div className="flex flex-col items-center">
                <MessageCircle className="h-10 w-10 text-green-300" />
                <h3 className="text-xl font-bold mt-2">25+</h3>
                <p className="text-sm">Countries Reached</p>
              </div>
              <div className="flex flex-col items-center">
                <Heart className="h-10 w-10 text-green-300" />
                <h3 className="text-xl font-bold mt-2">10,000+</h3>
                <p className="text-sm">Donors Worldwide</p>
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
