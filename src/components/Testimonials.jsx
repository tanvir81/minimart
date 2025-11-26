"use client";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Testimonial 1 */}
          <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
            <div className="card-body">
              <p className="italic">
                "MiniMart makes shopping so easy! Checkout is fast and secure."
              </p>
              <div className="flex items-center justify-center mt-4 space-x-3">
                <Image
                  src="/customer-1.jpg"
                  alt="Sarah K."
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <h3 className="font-semibold">David R</h3>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
            <div className="card-body">
              <p className="italic">
                "I love how responsive the site is. Works perfectly on my
                phone."
              </p>
              <div className="flex items-center justify-center mt-4 space-x-3">
                <Image
                  src="/customer-2.png"
                  alt="David R."
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <h3 className="font-semibold">Shara K.</h3>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
            <div className="card-body">
              <p className="italic">
                "Managing products is a breeze. Clerk login makes it secure."
              </p>
              <div className="flex items-center justify-center mt-4 space-x-3">
                <Image
                  src="/customer-3.jpg"
                  alt="Ayesha M."
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <h3 className="font-semibold">Michael T.</h3>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
            <div className="card-body">
              <p className="italic">
                "The product quality is amazing, and customer service is always
                helpful."
              </p>
              <div className="flex items-center justify-center mt-4 space-x-3">
                <Image
                  src="/customer-4.jpg"
                  alt="Michael T."
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <h3 className="font-semibold">Ayesha M.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
