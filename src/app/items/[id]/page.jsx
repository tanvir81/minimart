"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function ItemDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) {
          throw new Error("Product not found");
        }
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const getSafeImage = (src) => {
    if (!src || typeof src !== "string" || src.trim() === "") {
      return "/images/default.jpg";
    }
    if (src.startsWith("http") || src.startsWith("/")) {
      return src;
    }
    return `/images/${src}`;
  };

  if (loading) {
    return <p className="text-center mt-20">Loading product details...</p>;
  }

  if (!product) {
    return <p className="text-center mt-20">Product not found.</p>;
  }

  return (
    <main className="py-8 px-3 max-w-md mx-auto">
      {/* Card wrapper */}
      <div className="bg-white shadow rounded-lg p-4">
        {/* Image section */}
        <div className="w-full mb-4">
          <Image
            src={getSafeImage(product.image)}
            alt={product.name || "Product image"}
            width={350}
            height={220}
            className="object-contain rounded-md mx-auto"
          />
        </div>

        {/* Product title */}
        <h1 className="text-xl font-bold mb-2 text-center">
          {product.name || "Untitled Product"}
        </h1>

        {/* Short description */}
        <p className="text-gray-600 mb-1 italic text-center text-sm">
          {product.shortDescription || "No short description available."}
        </p>

        {/* Full description */}
        <p className="text-gray-700 mb-4 text-center text-sm">
          {product.fullDescription || "No description available."}
        </p>

        {/* Meta info */}
        <div className="text-gray-600 mb-4 space-y-1 text-center text-sm">
          <p className="font-semibold">
            Price: ${product.price ? Number(product.price).toFixed(2) : "N/A"}
          </p>
          {product.date && (
            <p suppressHydrationWarning>
              Added: {new Date(product.date).toLocaleDateString()}
            </p>
          )}
          {product.priority && <p>Priority: {product.priority}</p>}
          {product.stock !== undefined && <p>Stock: {product.stock}</p>}
        </div>

        {/* Back button */}
        <div className="text-center">
          <button
            onClick={() => router.push("/items")}
            className="px-3 py-1.5 bg-blue-400 rounded hover:bg-blue-300 text-white text-sm"
          >
            ← Back to Items
          </button>
        </div>
      </div>
    </main>
  );
}
