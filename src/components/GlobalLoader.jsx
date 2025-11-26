"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GlobalLoader({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Trigger loader whenever route changes
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // simulate load
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <span className="loading loading-spinner loading-lg text-blue-600"></span>
        </div>
      )}
      {children}
    </div>
  );
}
