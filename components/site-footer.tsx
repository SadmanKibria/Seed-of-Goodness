import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/lib/seo-config";

export function SiteFooter() {
  return (
    <footer className="bg-brand-brown-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Seeds of Goodness"
                width={60}
                height={60}
                className="h-16 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-brand-brown-100">
                  Charity Reg: {siteConfig.charity.regNumber}
                </span>
              </div>
            </div>
            <p className="text-brand-brown-100 text-sm mt-4">
              {siteConfig.name} is dedicated to providing humanitarian aid to
              those in need, with a focus on Gaza emergency relief.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href={siteConfig.charity.socialLinks.facebook}
                className="text-white hover:text-brand-green-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.charity.socialLinks.twitter}
                className="text-white hover:text-brand-green-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.charity.socialLinks.instagram}
                className="text-white hover:text-brand-green-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-brand-green-400">Quick Links</h3>
            <ul className="space-y-2 text-brand-brown-100">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-green-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-green-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/causes"
                  className="hover:text-brand-green-400 transition-colors"
                >
                  Our Causes
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-brand-green-400 transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-brand-green-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="hover:text-brand-green-400 transition-colors"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-brand-green-400">Contact Us</h3>
            <ul className="space-y-3 text-brand-brown-100">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-green-400 flex-shrink-0" />
                <span>{siteConfig.charity.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-green-400 flex-shrink-0" />
                <span>{siteConfig.charity.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand-green-400 flex-shrink-0 mt-1" />
                <span>{siteConfig.charity.address}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-brand-green-400">
              Bank Details
            </h3>
            <ul className="space-y-2 text-brand-brown-100 text-sm">
              <li>
                Account Name: {siteConfig.charity.bankDetails.accountName}
              </li>
              <li>
                Account No: {siteConfig.charity.bankDetails.accountNumber}
              </li>
              <li>Sort Code: {siteConfig.charity.bankDetails.sortCode}</li>
              <li>Bank Name: {siteConfig.charity.bankDetails.bankName}</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/donate"
                className="bg-brand-green-600 hover:bg-brand-green-700 text-white px-4 py-2 rounded-md transition-colors inline-block"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-brown-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-brand-brown-100 text-sm">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Powered by{" "}
            <a
              href={siteConfig.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              {siteConfig.developer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
