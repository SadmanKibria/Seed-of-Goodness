import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
import { Progress } from "@/components/ui/progress";
import { QuoteCard } from "@/components/quote-card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { formatCurrency } from "@/lib/utils";
import { generateMetadata } from "@/lib/seo-config";

// Generate metadata for this page
export const metadata: Metadata = generateMetadata(
  "Our Causes",
  "Explore the humanitarian causes supported by Seeds of Goodness and learn how you can contribute to making a difference.",
  "causes"
);

// Manually define the 4 real causes
const causes = [
  {
    id: "food",
    title: "Food Project",
    description: "Providing food packages to families facing hunger.",
    raised: 35000,
    goal: 50000,
    image: "/pics/7.png",
  },
  {
    id: "water",
    title: "Water Project",
    description: "Supplying clean drinking water to those in need.",
    raised: 8000,
    goal: 20000,
    image: "/pics/17.png",
  },
  {
    id: "medical",
    title: "Medicine Project",
    description: "Providing medical aid to underserved communities.",
    raised: 10000,
    goal: 25000,
    image: "/pics/3.png",
  },
  {
    id: "others",
    title: "Other Support",
    description: "Supporting various urgent humanitarian needs.",
    raised: 10000,
    goal: 15000,
    image: "/pics/1.png",
  },
];

export default function CausesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-brand-brown-800">
                  Our Causes
                </h1>
                <p className="max-w-[900px] text-brand-brown-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Support our humanitarian initiatives and make a difference in
                  the lives of those in need.
                </p>
              </div>
            </div>
          </div>
        </section>

        <QuoteCard />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {causes.map((cause) => {
                const progress = Math.round((cause.raised / cause.goal) * 100);

                return (
                  <Card
                    key={cause.id}
                    className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-brand-brown-200 rounded-xl"
                  >
                    <div className="aspect-video w-full overflow-hidden relative">
                      <Image
                        src={cause.image}
                        alt={cause.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-brand-brown-800">
                        {cause.title}
                      </CardTitle>
                      <CardDescription className="text-brand-brown-600">
                        {cause.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
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
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/causes/${cause.id}`} className="w-full">
                        <Button className="w-full bg-brand-green-600 hover:bg-brand-green-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
