"use client";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Fresh Apples",
    price: "$4.99 / kg",
    image: "/apple.jpg",
    shortDescription: "Crisp and juicy apples, freshly picked.",
    review: "Customers love the freshness and natural sweetness!",
  },
  {
    id: 2,
    name: "Organic Milk",
    price: "$2.49 / L",
    image: "/milk.jpg",
    shortDescription: "Rich and creamy organic milk.",
    review: "Reviewers say it's the best milk for daily use.",
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    price: "$1.99",
    image: "/bread.jpg",
    shortDescription: "Healthy bread baked with whole grains.",
    review: "Praised for its taste and nutritional value.",
  },
  {
    id: 4,
    name: "Premium Coffee",
    price: "$9.99 / pack",
    image: "/coffee.jpg",
    shortDescription: "Aromatic coffee beans for a perfect brew.",
    review: "Loved by coffee enthusiasts for its bold flavor.",
  },
];

export default function ItemsShowcase() {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Items</h2>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="card bg-base-200 shadow-md hover:shadow-xl transition"
            >
              <figure>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48 rounded-t-lg"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{item.name}</h3>
                <p className="text-gray-600">{item.price}</p>
                <p className="text-sm text-gray-700">{item.shortDescription}</p>
                <p className="italic text-gray-500 text-sm">"{item.review}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Single View More button at bottom */}
        <div className="flex justify-center mt-12">
          <Link href="/items" className="btn btn-primary">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
