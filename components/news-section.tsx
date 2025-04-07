import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getRecentNews } from "@/lib/news-data";
import Image from "next/image";

export function NewsSection() {
  const recentNews = getRecentNews(3);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-green-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-brown-800">
              Latest Updates
            </h2>
            <p className="max-w-[900px] text-brand-brown-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay updated with our recent activities and impact stories.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {recentNews.map((article) => (
            <Card
              key={article.id}
              className="shadow-md hover:shadow-lg transition-shadow duration-300 border-brand-brown-200 rounded-xl"
            >
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
                <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
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
        <div className="flex justify-center mt-8">
          <Link href="/news">
            <Button
              variant="outline"
              className="rounded-lg border-2 border-brand-brown-300 text-brand-brown-700 hover:bg-brand-green-50 hover:border-brand-green-300 transition-all duration-300"
            >
              View All Updates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
