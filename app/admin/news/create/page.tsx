"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function CreateNewsPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      alert("News article created successfully!");
      setIsSubmitting(false);
      // In a real application, you would redirect to the news list page
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6 max-w-4xl">
          <Link
            href="/admin/news"
            className="flex items-center text-sm text-brand-brown-600 hover:text-brand-green-600 transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News Management
          </Link>

          <h1 className="text-3xl font-bold text-brand-brown-800 mb-8">
            Create News Article
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-brand-brown-700">
                Title
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-12 border-2 border-brand-brown-200 rounded-lg focus:border-brand-green-500 focus:ring-brand-green-500"
                placeholder="Enter article title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-brand-brown-700">
                Description
              </Label>
              <Input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="h-12 border-2 border-brand-brown-200 rounded-lg focus:border-brand-green-500 focus:ring-brand-green-500"
                placeholder="Enter a brief description"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="text-brand-brown-700">
                Date
              </Label>
              <Input
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="h-12 border-2 border-brand-brown-200 rounded-lg focus:border-brand-green-500 focus:ring-brand-green-500"
                placeholder="e.g., April 15, 2024"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image" className="text-brand-brown-700">
                Image URL
              </Label>
              <Input
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="h-12 border-2 border-brand-brown-200 rounded-lg focus:border-brand-green-500 focus:ring-brand-green-500"
                placeholder="Enter image URL"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content" className="text-brand-brown-700">
                Content
              </Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[300px] border-2 border-brand-brown-200 rounded-lg focus:border-brand-green-500 focus:ring-brand-green-500"
                placeholder="Write your article content here..."
                required
              />
              <p className="text-xs text-brand-brown-500">
                You can use HTML tags for formatting.
              </p>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Link href="/admin/news">
                <Button
                  type="button"
                  variant="outline"
                  className="border-brand-brown-300 text-brand-brown-700 hover:bg-brand-green-50 hover:border-brand-green-300"
                >
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                className="bg-brand-green-600 hover:bg-brand-green-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Saving...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Save className="mr-2 h-4 w-4" />
                    Save Article
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
