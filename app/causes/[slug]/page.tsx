import Link from "next/link";
import { ArrowRight, Calendar, Heart, Share2 } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { QuoteCard } from "@/components/quote-card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getCauseById } from "@/lib/causes-data";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";

// Generate dynamic metadata for each cause
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cause = getCauseById(params.slug);

  if (!cause) {
    return {
      title: "Cause Not Found",
      description: "The cause you're looking for doesn't exist.",
    };
  }

  return {
    title: cause.title,
    description: cause.description,
    openGraph: {
      title: cause.title,
      description: cause.description,
      url: `/causes/${params.slug}`,
    },
  };
}

export default function CausePage({ params }: { params: { slug: string } }) {
  const cause = getCauseById(params.slug);

  if (!cause) {
    return (
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1 container py-12">
          <h1 className="text-3xl font-bold">Cause not found</h1>
          <p className="mt-4">
            The cause you`&apos;`re looking for doesn`&apos;`t exist.
          </p>
          <Link href="/causes" className="mt-6 inline-block">
            <Button>Back to Causes</Button>
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const progress = Math.round((cause.raised / cause.goal) * 100);

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                {cause.isUrgent && (
                  <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 mb-2">
                    Urgent Appeal
                  </div>
                )}
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-brand-brown-800">
                  {cause.title}
                </h1>
                <p className="max-w-[900px] text-brand-brown-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {cause.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <QuoteCard />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-3 items-start">
              <div className="lg:col-span-2 space-y-8">
                <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={cause.image || "/placeholder.svg"}
                    alt={cause.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div
                  className="prose max-w-none text-brand-brown-700"
                  dangerouslySetInnerHTML={{ __html: cause.content }}
                />

                <div className="flex items-center gap-4 pt-6">
                  <Button
                    variant="outline"
                    className="rounded-full flex items-center gap-2 border-brand-brown-300 text-brand-brown-700 hover:bg-brand-green-50 hover:border-brand-green-300"
                  >
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full flex items-center gap-2 border-brand-brown-300 text-brand-brown-700 hover:bg-brand-green-50 hover:border-brand-green-300"
                  >
                    <Heart className="h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-brand-brown-200">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown-800">
                    Donation Progress
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div>Raised: {formatCurrency(cause.raised)}</div>
                      <div>Goal: {formatCurrency(cause.goal)}</div>
                    </div>
                    <Progress
                      value={progress}
                      className="h-2 w-full bg-brand-brown-100"
                    >
                      <div className="h-full bg-brand-green-500 rounded-full"></div>
                    </Progress>
                    <p className="text-sm text-brand-brown-600 mt-2">
                      {progress}% of our goal achieved
                    </p>
                  </div>

                  <div className="mt-6">
                    <Link href={`/donate?cause=${params.slug}`}>
                      <Button className="w-full bg-brand-green-600 hover:bg-brand-green-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        Donate Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-brand-brown-200">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown-800">
                    Recent Donors
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-brand-green-100 h-10 w-10 rounded-full flex items-center justify-center text-brand-green-600 font-bold">
                        A
                      </div>
                      <div>
                        <p className="font-medium">Anonymous</p>
                        <div className="flex items-center text-sm text-brand-brown-500">
                          <Calendar className="mr-1 h-3 w-3" />
                          <span>2 days ago</span>
                          <span className="mx-2">•</span>
                          <span className="font-medium">£50</span>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-brand-green-100 h-10 w-10 rounded-full flex items-center justify-center text-brand-green-600 font-bold">
                        S
                      </div>
                      <div>
                        <p className="font-medium">Sarah K.</p>
                        <div className="flex items-center text-sm text-brand-brown-500">
                          <Calendar className="mr-1 h-3 w-3" />
                          <span>3 days ago</span>
                          <span className="mx-2">•</span>
                          <span className="font-medium">£100</span>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-brand-green-100 h-10 w-10 rounded-full flex items-center justify-center text-brand-green-600 font-bold">
                        M
                      </div>
                      <div>
                        <p className="font-medium">Mohammed A.</p>
                        <div className="flex items-center text-sm text-brand-brown-500">
                          <Calendar className="mr-1 h-3 w-3" />
                          <span>5 days ago</span>
                          <span className="mx-2">•</span>
                          <span className="font-medium">£250</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-brand-brown-200">
                  <h3 className="text-xl font-bold mb-4 text-brand-brown-800">
                    Contact Us
                  </h3>
                  <p className="text-brand-brown-600 mb-4">
                    Have questions about this cause? Contact us directly:
                  </p>
                  <ul className="space-y-2 text-brand-brown-600">
                    <li>Email: seedofgood2024@gmail.com</li>
                    <li>Phone: 07894875700</li>
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
