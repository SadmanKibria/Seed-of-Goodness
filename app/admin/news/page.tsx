"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Edit, Plus, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// This would typically come from a database or CMS
const initialNewsData = [
  {
    id: "ramadan-distribution-gaza",
    title: "£6,000 Distributed in Gaza",
    description:
      "Cash aid delivered directly to families in Gaza during Ramadan.",
    content:
      "Our team on the ground in Gaza successfully distributed £6,000 in cash aid to families in need on the 21st day of Ramadan, providing essential support during this difficult time.",
    date: "Ramadan 21, 2024",
    image:
      "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "emergency-food-distribution",
    title: "Emergency Food Distribution",
    description:
      "Our team delivered essential food supplies to families in Gaza.",
    content:
      "Through the generous support of our donors, we were able to provide nutritious food packages to hundreds of families facing severe food insecurity in Gaza.",
    date: "April 8, 2024",
    image:
      "https://images.unsplash.com/photo-1584263347416-85a696b4eda7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "medical-aid-gaza",
    title: "Medical Aid Reaches Gaza",
    description:
      "Essential medical supplies delivered to healthcare facilities in Gaza.",
    content:
      "Our team successfully delivered critical medical supplies to healthcare facilities in Gaza, helping to address the urgent medical needs of the population during the ongoing crisis.",
    date: "April 1, 2024",
    image:
      "https://images.unsplash.com/photo-1631815588090-d1bcbe9a8545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
];

export default function AdminNewsPage() {
  const [newsData, setNewsData] = useState(initialNewsData);

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this news article?")) {
      setNewsData(newsData.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-brand-brown-800">
              Manage News
            </h1>
            <Link href="/admin/news/create">
              <Button className="bg-brand-green-600 hover:bg-brand-green-700 text-white">
                <Plus className="mr-2 h-4 w-4" />
                Add New Article
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsData.map((news) => (
              <Card
                key={news.id}
                className="overflow-hidden shadow-md border-brand-brown-200 rounded-xl"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-brand-brown-500 mb-2">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{news.date}</span>
                  </div>
                  <CardTitle className="text-brand-brown-800">
                    {news.title}
                  </CardTitle>
                  <CardDescription className="text-brand-brown-600">
                    {news.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Link href={`/admin/news/edit/${news.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 border-brand-brown-300 text-brand-brown-700 hover:bg-brand-green-50 hover:border-brand-green-300"
                    >
                      <Edit className="h-4 w-4" />
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 border-red-300 text-red-700 hover:bg-red-50 hover:border-red-400"
                    onClick={() => handleDelete(news.id)}
                  >
                    <Trash className="h-4 w-4" />
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {newsData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-brand-brown-600 mb-4">
                No news articles found.
              </p>
              <Link href="/admin/news/create">
                <Button className="bg-brand-green-600 hover:bg-brand-green-700 text-white">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Your First Article
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
