import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
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
import { QuoteCard } from "@/components/quote-card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getAllNews } from "@/lib/news-data";
import { generateMetadata } from "@/lib/seo-config";

// Generate metadata for this page
export const metadata: Metadata = generateMetadata(
  "Latest News",
  "Stay updated with the latest news and activities from Seeds of Goodness charity.",
  "news"
);

export default function NewsPage() {
  const newsArticles = getAllNews();

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-brand-brown-800">
                  Latest News
                </h1>
                <p className="max-w-[900px] text-brand-brown-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with our recent activities and impact stories.
                </p>
              </div>
            </div>
          </div>
        </section>

        <QuoteCard />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {newsArticles.map((article, index) => (
                <Card
                  key={article.id}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-brand-brown-200 rounded-xl"
                >
                  <div className="aspect-video w-full overflow-hidden relative">
                    {index === 0 ? (
                      <iframe
                        className="w-full h-full absolute inset-0"
                        src="https://www.youtube.com/embed/aspeHy7lAe4?si=PGcvS896OOcPv6vZ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    ) : index === 1 ? (
                      <iframe
                        className="w-full h-full absolute inset-0"
                        src="https://www.youtube.com/embed/_7L8L7LKwn4?si=bDgbfR3-rOBtR7V0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    ) : index === 2 ? (
                      <iframe
                        className="w-full h-full absolute inset-0"
                        src="https://www.youtube.com/embed/9Ap8qz9Lcsk?si=X_zh1H056y3bIkIJ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <Image
                        src="/seedofg-pic1.jpg"
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center text-sm text-brand-brown-500 mb-2">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <CardTitle className="text-brand-brown-800">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-brand-brown-600">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-brown-600 line-clamp-3">
                      {article.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/news/${article.id}`}>
                      <Button
                        variant="link"
                        className="p-0 text-brand-green-600 hover:text-brand-green-700"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-brand-brown-600 mb-4">
                Want to stay updated with our latest news?
              </p>
              <Link href="/contact">
                <Button className="bg-brand-green-600 hover:bg-brand-green-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  Subscribe to Our Newsletter
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
