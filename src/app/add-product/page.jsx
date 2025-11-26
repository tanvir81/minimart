"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("electronics");

  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/login");
    }
  }, [isSignedIn, router]);

  if (!isSignedIn) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      shortDescription,
      fullDescription,
      price: Number(price),
      date,
      priority,
      stock: Number(stock),
      image,
      category,
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (res.ok) {
        toast.success(" Product added successfully!");
        // reset form
        setName("");
        setShortDescription("");
        setFullDescription("");
        setPrice("");
        setDate("");
        setPriority("Medium");
        setStock("");
        setImage("");
        setCategory("electronics");
      } else {
        toast.error("❌ Failed to add product");
      }
    } catch (err) {
      console.error("Error adding product:", err);
      toast.error("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <main className="py-16 px-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Add New Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Product title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          placeholder="Short description"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <textarea
          placeholder="Full description"
          value={fullDescription}
          onChange={(e) => setFullDescription(e.target.value)}
          className="textarea textarea-bordered w-full"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="select select-bordered w-full"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          placeholder="Image URL (e.g. https://example.com/perfume.jpg)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered w-full"
          required
        >
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="grocery">Grocery</option>
        </select>
        <button type="submit" className="btn btn-primary w-full">
          Add Product
        </button>
      </form>
    </main>
  );
}
