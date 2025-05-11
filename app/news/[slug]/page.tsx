import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ShareButton } from "@/components/ShareButton";
import { getNewsById } from "@/lib/news-data";
import { generateMetadata as genMeta } from "@/lib/seo-config";

// Dynamic metadata for each news article
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getNewsById(params.slug);
  if (!article) {
    return genMeta(
      "Article Not Found",
      "The article you're looking for doesn't exist."
    );
  }
  return genMeta(article.title, article.description, `news/${params.slug}`);
}

export default function NewsArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getNewsById(params.slug);

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1 container py-12">
          <h1 className="text-3xl font-bold">Article not found</h1>
          <p className="mt-4">
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/news" className="mt-6 inline-block">
            <Button>Back to News</Button>
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-green-50">
          <div className="container px-4 md:px-6 text-center space-y-6">
            <Link
              href="/news"
              className="flex items-center text-sm text-brand-brown-600 hover:text-brand-green-600 transition-colors mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
            <div className="space-y-2">
              <div className="flex items-center justify-center text-sm text-brand-brown-500">
                <Calendar className="mr-1 h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-brand-brown-800">
                {article.title}
              </h1>
              <p className="max-w-[900px] mx-auto text-brand-brown-600 md:text-xl">
                {article.description}
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto space-y-8">
            <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg relative">
              {article.video ? (
                <iframe
                  className="w-full h-full absolute inset-0"
                  src={article.video}
                  title={article.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              ) : (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                  priority
                />
              )}
            </div>

            <div
              className="prose max-w-none text-brand-brown-700"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="flex items-center gap-4 pt-6 border-t border-brand-brown-200 mt-8">
              <ShareButton
                title={article.title}
                description={article.description}
              />
            </div>

            <div className="mt-12 bg-brand-green-50 p-6 rounded-xl border border-brand-green-200">
              <h3 className="text-xl font-bold mb-4 text-brand-brown-800">
                Support Our Work
              </h3>
              <p className="text-brand-brown-600 mb-4">
                Your donations make our humanitarian work possible. Help us
                continue supporting those in need.
              </p>
              <Link href="/donate">
                <Button className="bg-brand-green-600 hover:bg-brand-green-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
