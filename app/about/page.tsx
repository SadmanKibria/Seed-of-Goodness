import { Heart } from "lucide-react";
import type { Metadata } from "next";

import { QuoteCard } from "@/components/quote-card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { generateMetadata } from "@/lib/seo-config";

// Generate metadata for this page
export const metadata: Metadata = generateMetadata(
  "About Us",
  "Learn about Seeds of Goodness, our mission, values and the impact we're making in communities worldwide.",
  "about"
);

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-brand-brown-800">
                  About Seeds of Goodness
                </h1>
                <p className="max-w-[900px] text-brand-brown-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dedicated to providing humanitarian aid and support to
                  communities in need around the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        <QuoteCard />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-brand-brown-800">
                  Our Mission
                </h2>
                <p className="text-brand-brown-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Seeds of Goodness is committed to alleviating suffering and
                  providing humanitarian assistance to those affected by
                  poverty, conflict, and natural disasters. We work to empower
                  communities through sustainable development projects and
                  emergency relief efforts.
                </p>
                <p className="text-brand-brown-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our work is guided by the Islamic principles of compassion,
                  justice, and dignity for all human beings, regardless of race,
                  religion, or nationality.
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-xl shadow-lg">
                <img
                  alt="Seeds of Goodness charity work"
                  className="object-cover w-full h-full"
                  src="/seedofg-pic1.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-xl shadow-lg order-2 lg:order-1">
                <img
                  alt="Seeds of Goodness team members"
                  className="object-cover w-full h-full"
                  src="/seedofg-pic1.jpg"
                />
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tighter text-brand-brown-800">
                  Our Values
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="bg-brand-green-100 p-2 rounded-full">
                      <Heart className="h-5 w-5 text-brand-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-brown-800">
                        Compassion
                      </h3>
                      <p className="text-brand-brown-600">
                        We act with empathy and care for those in need.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-brand-green-100 p-2 rounded-full">
                      <Heart className="h-5 w-5 text-brand-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-brown-800">
                        Integrity
                      </h3>
                      <p className="text-brand-brown-600">
                        We maintain transparency and accountability in all our
                        operations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-brand-green-100 p-2 rounded-full">
                      <Heart className="h-5 w-5 text-brand-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-brown-800">
                        Dignity
                      </h3>
                      <p className="text-brand-brown-600">
                        We respect the dignity and rights of all people we
                        serve.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-brand-green-100 p-2 rounded-full">
                      <Heart className="h-5 w-5 text-brand-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-brown-800">
                        Sustainability
                      </h3>
                      <p className="text-brand-brown-600">
                        We develop long-term solutions that empower communities.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-brown-800">
                  Our Projects
                </h2>
                <p className="max-w-[900px] text-brand-brown-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Seeds of Goodness is actively involved in various humanitarian
                  projects.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-brown-100">
                  <div className="w-16 h-16 bg-brand-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Heart className="h-8 w-8 text-brand-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-brand-brown-800">
                    Food Distribution
                  </h3>
                  <p className="text-brand-brown-600 text-center">
                    Providing nutritious meals to families in crisis situations,
                    with a focus on Gaza.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-brown-100">
                  <div className="w-16 h-16 bg-brand-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Heart className="h-8 w-8 text-brand-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-brand-brown-800">
                    Medical Aid
                  </h3>
                  <p className="text-brand-brown-600 text-center">
                    Supplying essential medicines and supporting healthcare
                    services in conflict zones.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-brown-100">
                  <div className="w-16 h-16 bg-brand-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Heart className="h-8 w-8 text-brand-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-brand-brown-800">
                    Clean Water
                  </h3>
                  <p className="text-brand-brown-600 text-center">
                    Ensuring access to safe drinking water in areas where
                    infrastructure has been damaged.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-brown-100">
                  <div className="w-16 h-16 bg-brand-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Heart className="h-8 w-8 text-brand-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-brand-brown-800">
                    Clothing & Shelter
                  </h3>
                  <p className="text-brand-brown-600 text-center">
                    Providing clothing and temporary shelter for displaced
                    families.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-brown-100">
                  <div className="w-16 h-16 bg-brand-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Heart className="h-8 w-8 text-brand-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-brand-brown-800">
                    Hygiene Products
                  </h3>
                  <p className="text-brand-brown-600 text-center">
                    Distributing essential hygiene kits to maintain health and
                    dignity in crisis situations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-brown-100">
                  <div className="w-16 h-16 bg-brand-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Heart className="h-8 w-8 text-brand-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-brand-brown-800">
                    Emergency Response
                  </h3>
                  <p className="text-brand-brown-600 text-center">
                    Rapid deployment of aid in emergency situations to save
                    lives.
                  </p>
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
