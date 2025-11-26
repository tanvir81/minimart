"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center px-6"
      style={{ backgroundImage: "url('/hero-banner.jpg')" }}
    >
      {/* Text content */}
      <div className="relative max-w-4xl text-left space-y-6 bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-lg ml-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
          Welcome to MiniMart
        </h1>
        <p className="text-lg text-gray-800">
          Your one‑stop shop for everyday essentials. <br /> Browse items, add
          products, and manage your store with ease.
        </p>

        <Link
          href="/items"
          className="btn btn-primary transition-transform hover:scale-105 hover:shadow-lg"
        >
          Browse Items
        </Link>
      </div>
    </section>
  );
}
