import Link from "next/link";
import { Calendar, ArrowLeft, Share2, Heart } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const newsData = {
  "ramadan-distribution-gaza": {
    title: "£3,000 Distributed in Gaza",
    description:
      "Cash aid delivered directly to families in Gaza on 23rd Ramadan.",
    content: `
      <p>Our team on the ground in Gaza successfully distributed £3,000 in cash aid to families in need on the 23rd day of Ramadan, providing essential support during this difficult time.</p>
      
      <p>The distribution targeted the most vulnerable families, including those with elderly members, children, and individuals with disabilities. Each family received financial assistance to help cover their basic needs, including food, medicine, and other essentials.</p>
      
      <p>This distribution was made possible through the generous donations of our supporters, who continue to stand in solidarity with the people of Gaza during this humanitarian crisis. The cash aid approach allows families to prioritize their most urgent needs, providing them with dignity and agency during these challenging times.</p>
      
      <p>Our local team reported that many families expressed profound gratitude for the support, with one recipient sharing: "This assistance came at a critical time when we had almost nothing left. It will help us secure food and medicine for our children for the coming weeks."</p>
      
      <p>Seeds of Goodness remains committed to supporting the people of Gaza through ongoing humanitarian aid efforts. We will continue to provide regular updates on our distributions and the impact of your donations.</p>
      
      <p>We extend our heartfelt thanks to all our donors who made this distribution possible. Your generosity continues to make a real difference in the lives of those facing extreme hardship.</p>
    `,
    date: "Ramadan 23, 2025",
    image: "/seedofg-pic1.jpg",
    video: "https://www.youtube.com/embed/aspeHy7lAe4?si=PGcvS896OOcPv6vZ",
  },
  "emergency-food-distribution": {
    title: "Emergency Food Distribution",
    description:
      "Our team delivered essential food supplies to families in Gaza.",
    content: `
      <p>Through the generous support of our donors, we were able to provide nutritious food packages to hundreds of families facing severe food insecurity in Gaza.</p>
      
      <p>The food packages contained essential items such as rice, flour, oil, canned goods, dates, and other non-perishable items that can sustain a family for several weeks. Each package was designed to meet the nutritional needs of a family of five, with special consideration for the dietary requirements of children and the elderly.</p>
      
      <p>Our distribution team worked tirelessly to ensure that the aid reached those most in need, including families in areas with limited access to markets and food supplies. The distribution was conducted in coordination with local community leaders to identify the most vulnerable households.</p>
      
      <p>"We haven't had a proper meal in days," shared one mother of four who received a food package. "This food will help us survive for the next few weeks. We are grateful for everyone who contributed to this aid."</p>
      
      <p>The ongoing crisis in Gaza has severely impacted food security, with many families struggling to access even basic necessities. Our emergency food distributions aim to address this critical need while we continue to work on more sustainable solutions.</p>
      
      <p>We remain committed to supporting the people of Gaza during this difficult time and will continue our efforts to provide essential aid to those in need. Your continued support makes these distributions possible, and we are deeply grateful for your generosity.</p>
    `,
    date: "April 8, 2024",
    image: "/seedofg-pic1.jpg",
    video: "https://www.youtube.com/embed/aspeHy7lAe4?si=PGcvS896OOcPv6vZ",
  },
  "medical-aid-gaza": {
    title: "Medical Aid Reaches Gaza",
    description:
      "Essential medical supplies delivered to healthcare facilities in Gaza.",
    content: `
      <p>Our team successfully delivered critical medical supplies to healthcare facilities in Gaza, helping to address the urgent medical needs of the population during the ongoing crisis.</p>
      
      <p>The medical aid included essential medications, surgical supplies, first aid kits, and specialized equipment needed to treat injuries and manage chronic conditions. These supplies were distributed to several healthcare facilities across Gaza, including hospitals and community clinics that are struggling to meet the overwhelming healthcare needs of the population.</p>
      
      <p>Healthcare workers in Gaza have been working under extremely challenging conditions, with shortages of medical supplies, electricity, and clean water. Our delivery aims to support their heroic efforts and help ensure that patients can receive the care they desperately need.</p>
      
      <p>"These medical supplies are literally saving lives," explained Dr. Ahmed, a physician at one of the recipient hospitals. "We were running critically low on essential medications and surgical supplies. This delivery will help us continue providing care to our patients."</p>
      
      <p>The healthcare system in Gaza has been severely strained by the ongoing crisis, with many facilities damaged or destroyed and those still operating facing overwhelming numbers of patients. Our medical aid program aims to support these facilities in providing essential healthcare services to the population.</p>
      
      <p>We remain committed to supporting healthcare in Gaza and will continue our efforts to deliver medical supplies to those in need. Your donations make these deliveries possible, and we are deeply grateful for your support.</p>
    `,
    date: "April 1, 2024",
    image: "/seedofg-pic1.jpg",
    video: "https://www.youtube.com/embed/aspeHy7lAe4?si=PGcvS896OOcPv6vZ",
  },
};

export const metadata: Metadata = {
  title: "News Article - Seeds of Goodness",
  description:
    "Read the latest news and updates from Seeds of Goodness. Learn about our humanitarian efforts and how we are making a difference in the lives of those in need.",
  openGraph: {
    title: "News Article - Seeds of Goodness",
    description:
      "Read the latest news and updates from Seeds of Goodness. Learn about our humanitarian efforts and how we are making a difference in the lives of those in need.",
    url: "https://seedsofgoodness.org/news",
    siteName: "Seeds of Goodness",
    images: [
      {
        url: "https://seedsofgoodness.org/logo.png",
        width: 800,
        height: 630,
        alt: "Seeds of Goodness",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "News Article - Seeds of Goodness",
    description:
      "Read the latest news and updates from Seeds of Goodness. Learn about our humanitarian efforts and how we are making a difference in the lives of those in need.",
    images: ["https://seedsofgoodness.org/logo.png"],
  },
};

export default function NewsArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = newsData[params.slug as keyof typeof newsData];

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1 container py-12">
          <h1 className="text-3xl font-bold">Article not found</h1>
          <p className="mt-4">The article you're looking for doesn't exist.</p>
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
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link
                href="/news"
                className="flex items-center text-sm text-brand-brown-600 hover:text-brand-green-600 transition-colors mb-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News
              </Link>
              <div className="space-y-2">
                <div className="flex items-center justify-center text-sm text-brand-brown-500 mb-2">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-brand-brown-800">
                  {article.title}
                </h1>
                <p className="max-w-[900px] text-brand-brown-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {article.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg mb-8">
                {article.video ? (
                  <iframe
                    className="w-full h-full"
                    src={article.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>

              <div
                className="prose max-w-none text-brand-brown-700"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-brand-brown-200">
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
