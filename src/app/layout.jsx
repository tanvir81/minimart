import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";
import { ClerkProvider } from "@clerk/nextjs";
import GlobalLoader from "../components/GlobalLoader";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "MiniMart",
  description: "Your one-stop shop for everyday essentials",
};

export default function RootLayout({ children }) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  //update
  return (
    <html lang="en" data-theme="light">
      <body>
        {publishableKey ? (
          <ClerkProvider publishableKey={publishableKey}>
            <CartProvider>
              <Navbar />
              <GlobalLoader>{children}</GlobalLoader>
              <Footer />
              <Toaster position="top-right" />
            </CartProvider>
          </ClerkProvider>
        ) : (
          <CartProvider>
            <Navbar />
            <GlobalLoader>{children}</GlobalLoader>
            <Footer />
            <Toaster position="top-right" />
            <div
              style={{
                padding: "1rem",
                background: "#fff3cd",
                color: "#856404",
              }}
            >
              Guest mode enabled — authentication is disabled for this demo.
            </div>
          </CartProvider>
        )}
      </body>
    </html>
  );
}
