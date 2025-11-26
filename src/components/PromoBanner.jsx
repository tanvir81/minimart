"use client";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section
      className="py-16 bg-cover bg-center text-primary-content"
      style={{ backgroundImage: "url('/holiday.jpg')" }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6 bg-black/40 p-8 rounded-lg">
        <h2 className="text-4xl font-bold">Holiday Sale is Here!</h2>
        <p className="text-lg">
          Enjoy up to <span className="font-bold">50% off</span> on selected
          items. Limited time only!
        </p>
        <Link href="/items" className="btn btn-secondary">
          Shop Now
        </Link>
      </div>
    </section>
  );
}
