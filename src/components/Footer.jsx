"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content px-6 py-10">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-center">
        {/* Logo + Company Info */}
        <div className="flex flex-col items-center sm:items-start gap-3">
          <img src="/logo-2.png" alt="MiniMart Logo" className="h-24 w-auto" />
          <p className="text-sm text-center sm:text-left">
            MiniMart <br /> Reliable shopping experience since 2025
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col items-center sm:items-start gap-2">
          <h6 className="font-semibold mb-2">Links</h6>
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/items"
            className="transition-colors duration-300 hover:text-primary"
          >
            Items
          </Link>
          <Link
            href="/about"
            className="transition-colors duration-300 hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="transition-colors duration-300 hover:text-primary"
          >
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center sm:items-start gap-3">
          <h6 className="font-semibold mb-2">Follow Us</h6>
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-neutral-content/30 pt-4 text-center text-sm">
        © {new Date().getFullYear()} MiniMart. All rights reserved.
      </div>
    </footer>
  );
}
