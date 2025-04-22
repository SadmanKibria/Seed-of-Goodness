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
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getAllNews } from "@/lib/news-data";
import { generateMetadata } from "@/lib/seo-config";

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
          <div className="container px-4 md:px-6 text-center space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-brand-brown-800">
              Latest News
            </h1>
            <p className="max-w-[900px] mx-auto text-brand-brown-600 md:text-xl">
              Read about our latest impact and ongoing efforts.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-brand-brown-200 rounded-xl"
              >
                <div className="aspect-video w-full overflow-hidden relative">
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
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
