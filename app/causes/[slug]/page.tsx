import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { QuoteCard } from "@/components/quote-card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { formatCurrency } from "@/lib/utils";
import { generateMetadata as genMeta } from "@/lib/seo-config";
import { ShareButton } from "@/components/ShareButton";
import { getCauseById } from "@/lib/causes-data";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cause = getCauseById(params.slug);
  if (!cause) {
    return genMeta(
      "Cause Not Found",
      "The cause you're looking for doesn't exist."
    );
  }
  return genMeta(cause.title, cause.description, `causes/${params.slug}`);
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
            The cause you&apos;re looking for doesn&apos;t exist.
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
          <div className="container px-4 md:px-6 text-center space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-brand-brown-800">
              {cause.title}
            </h1>
            <p className="max-w-[900px] mx-auto text-brand-brown-600 md:text-xl">
              {cause.description}
            </p>
          </div>
        </section>

        <QuoteCard />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-3 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg relative">
                <Image
                  src={cause.image}
                  alt={cause.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                  className="object-cover"
                />
              </div>

              <div
                className="prose max-w-none text-brand-brown-700"
                dangerouslySetInnerHTML={{ __html: cause.content }}
              />

              <div className="flex gap-4 pt-6">
                <ShareButton
                  title={cause.title}
                  description={cause.description}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-brand-brown-800">
                  Donation Progress
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <div>Raised: {formatCurrency(cause.raised)}</div>
                    <div>Goal: {formatCurrency(cause.goal)}</div>
                  </div>
                  <Progress value={progress} className="h-2 bg-brand-brown-100">
                    <div className="h-full bg-brand-green-500 rounded-full"></div>
                  </Progress>
                  <p className="text-sm text-brand-brown-600 mt-2">
                    {progress}% of goal achieved
                  </p>
                </div>

                <div className="mt-6">
                  <Link href={`/donate?cause=${params.slug}`}>
                    <Button className="w-full bg-brand-green-600 hover:bg-brand-green-700 text-white">
                      Donate Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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
