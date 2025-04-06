import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
import { getFeaturedCauses } from "@/lib/causes-data";
import { formatCurrency } from "@/lib/utils";

export function FeaturedCauses() {
  const featuredCauses = getFeaturedCauses(3);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-brown-800">
              Featured Causes
            </h2>
            <p className="max-w-[900px] text-brand-brown-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Support our ongoing humanitarian initiatives and make a
              difference.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {featuredCauses.map((cause) => {
            const progress = Math.round((cause.raised / cause.goal) * 100);

            return (
              <Card
                key={cause.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-brand-brown-200 rounded-xl"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={cause.image || "/placeholder.svg"}
                    alt={cause.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  {cause.isUrgent && (
                    <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 mb-2">
                      Urgent
                    </div>
                  )}
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
        <div className="flex justify-center mt-8">
          <Link href="/causes">
            <Button
              variant="outline"
              className="rounded-lg border-2 border-brand-brown-300 text-brand-brown-700 hover:bg-brand-green-50 hover:border-brand-green-300 transition-all duration-300"
            >
              View All Causes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
