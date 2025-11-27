"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";

update;
const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

function ItemsPage() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    fetch(`${API_BASE}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  // helper function stays inside component
  const getSafeImage = (src) => {
    if (!src || typeof src !== "string" || src.trim() === "") {
      return `${API_BASE}/images/default.jpg`;
    }
    if (src.startsWith("http")) {
      return src;
    }
    if (src.startsWith("/images")) {
      return `${API_BASE}${src}`;
    }
    return `${API_BASE}/images/${src}`;
  };

  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      category === "all" || item.category?.toLowerCase() === category;
    return matchesSearch && matchesCategory;
  });

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <main className="py-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">All Products</h1>
      <p className="text-center text-gray-600 mb-8">
        Browse our latest items. Use search or filters to find what you need.
      </p>

      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products available</p>
      ) : (
        <>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
              >
                <img
                  src={getSafeImage(item.image)}
                  alt={item.name}
                  className="object-cover w-full h-40"
                />

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                    {item.shortDescription || "No short description available"}
                  </p>
                  <p className="text-gray-500 italic text-sm whitespace-pre-line mb-2">
                    {item.fullDescription || "No full description available"}
                  </p>
                  <p className="text-gray-700 font-semibold">
                    ${Number(item.price).toFixed(2)}
                  </p>

                  {item.priority && (
                    <span
                      className={`w-30 items-center text-xs text-white px-2 mt-2 py-1 rounded-full
                  ${item.priority === "High" ? "bg-red-500" : ""}
                  ${item.priority === "Medium" ? "bg-green-500" : ""}
                  ${item.priority === "Low" ? "bg-blue-500" : ""}`}
                    >
                      Priority: {item.priority}
                    </span>
                  )}

                  <div className="flex gap-2 mt-auto pt-3">
                    <Link
                      href={`/items/${item.id}`}
                      className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                    >
                      Details
                    </Link>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < filteredProducts.length && (
            <div className="text-center mt-8">
              <button
                onClick={() => setVisibleCount(filteredProducts.length)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Show More
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
}

export default dynamic(() => Promise.resolve(ItemsPage), { ssr: false });
