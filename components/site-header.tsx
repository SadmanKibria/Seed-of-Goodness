"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Check if the current path matches the link
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200",
        isScrolled ? "bg-white/95 shadow-md" : "bg-background/95"
      )}
    >
      <div className="container flex h-20 items-center">
        <Link
          className="flex items-center gap-2 font-semibold"
          href="/"
          aria-label="Seeds of Goodness - Home"
        >
          <Image
            src="/logo.png"
            alt="Seeds of Goodness Logo"
            width={50}
            height={50}
            className="h-14 w-auto"
            priority
          />
          <div className="flex flex-col">
            <span className="text-brand-green-600 font-bold text-lg">
              Seeds of Goodness
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex items-center gap-6">
          <Link
            className={cn(
              "text-sm font-medium transition-colors hover:text-brand-green-600",
              isActive("/") && "text-brand-green-600 font-semibold"
            )}
            href="/"
          >
            Home
          </Link>
          <Link
            className={cn(
              "text-sm font-medium transition-colors hover:text-brand-green-600",
              isActive("/about") && "text-brand-green-600 font-semibold"
            )}
            href="/about"
          >
            About
          </Link>
          <Link
            className={cn(
              "text-sm font-medium transition-colors hover:text-brand-green-600",
              isActive("/causes") && "text-brand-green-600 font-semibold"
            )}
            href="/causes"
          >
            Causes
          </Link>
          <Link
            className={cn(
              "text-sm font-medium transition-colors hover:text-brand-green-600",
              isActive("/news") && "text-brand-green-600 font-semibold"
            )}
            href="/news"
          >
            News
          </Link>
          <Link
            className={cn(
              "text-sm font-medium transition-colors hover:text-brand-green-600",
              isActive("/contact") && "text-brand-green-600 font-semibold"
            )}
            href="/contact"
          >
            Contact
          </Link>
          <Link href="/donate">
            <Button
              className={cn(
                "bg-brand-green-600 hover:bg-brand-green-700 text-white rounded-full px-6 shadow-md transition-all duration-300 hover:shadow-lg",
                isActive("/donate") && "bg-brand-green-700"
              )}
            >
              Donate
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden ml-auto flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] pt-10">
              <div className="flex flex-col gap-6 mt-8">
                <Link
                  href="/"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-brand-green-600",
                    isActive("/") && "text-brand-green-600 font-semibold"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-brand-green-600",
                    isActive("/about") && "text-brand-green-600 font-semibold"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/causes"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-brand-green-600",
                    isActive("/causes") && "text-brand-green-600 font-semibold"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Causes
                </Link>
                <Link
                  href="/news"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-brand-green-600",
                    isActive("/news") && "text-brand-green-600 font-semibold"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  News
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-brand-green-600",
                    isActive("/contact") && "text-brand-green-600 font-semibold"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-4 mt-4 border-t">
                  <Link href="/donate" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-brand-green-600 hover:bg-brand-green-700 text-white rounded-full shadow-md">
                      Donate Now
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
