"use client";
import Image from "next/image";

export default function Features() {
  return (
    <section className="py-16  bg-base-200  ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-12 text-black drop-shadow-lg">
          Why Choose MiniMart?
        </h2>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <div className="card bg-white/80 shadow-md hover:shadow-xl transition">
            <figure className="pt-6">
              <Image
                src="/check-out.png"
                alt="Fast Checkout"
                width={80}
                height={80}
                className="mx-auto"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title justify-center">Fast Checkout</h3>
              <p>
                Seamless shopping experience with quick and secure checkout.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="card bg-white/80 shadow-md hover:shadow-xl transition">
            <figure className="pt-6">
              <Image
                src="/atm-card.png"
                alt="Secure Payments"
                width={80}
                height={80}
                className="mx-auto"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title justify-center">Secure Payments</h3>
              <p>Trusted payment gateways to keep your transactions safe.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="card bg-white/80 shadow-md hover:shadow-xl transition">
            <figure className="pt-6">
              <Image
                src="/responsive-design.png"
                alt="Responsive Design"
                width={80}
                height={80}
                className="mx-auto"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title justify-center">Responsive Design</h3>
              <p>Shop anytime, anywhere — optimized for mobile and desktop.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="card bg-white/80 shadow-md hover:shadow-xl transition">
            <figure className="pt-6">
              <Image
                src="/customer-service.png"
                alt="Easy Management"
                width={80}
                height={80}
                className="mx-auto"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title justify-center">Easy Management</h3>
              <p>Admins can add and manage products with just a few clicks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
