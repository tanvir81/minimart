"use client";

import dynamic from "next/dynamic";
import { useCart } from "../../context/CartContext";

function CartPage() {
  const {
    cartItems = [],
    removeFromCart,
    updateQty,
    total = 0,
  } = useCart() || {};

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-16 px-[350px]">
        <h1 className="text-4xl text-center font-bold mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <p className="font-bold">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Total */}
            <div className="flex justify-between items-center mt-6">
              <h2 className="text-xl font-bold">Total</h2>
              <p className="text-xl font-bold">${total.toFixed(2)}</p>
            </div>

            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Checkout
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

// Export as client-only to avoid SSR errors
export default dynamic(() => Promise.resolve(CartPage), { ssr: false });
