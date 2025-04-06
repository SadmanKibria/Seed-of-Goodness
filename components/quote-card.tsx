"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { islamicQuotes, getRandomQuote } from "@/lib/islamic-quotes";

export function QuoteCard() {
  const [quote, setQuote] = useState(islamicQuotes[0]);

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  return (
    <section className="w-full py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <Card className="bg-brand-green-50 border-brand-green-200">
          <CardContent className="p-6 text-center">
            <p className="text-xl md:text-2xl font-serif mb-2 text-brand-brown-800">
              {quote.arabic}
            </p>
            <p className="text-brand-brown-600 italic">"{quote.english}"</p>
            <p className="text-brand-brown-500 text-sm mt-1">
              ({quote.source})
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
