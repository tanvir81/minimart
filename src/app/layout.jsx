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
  return (
    <html lang="en" data-theme="light">
      <body>
        {/* ✅ Wrap providers in a client-safe way */}
        <ClerkProvider>
          <CartProvider>
            <Navbar />
            <GlobalLoader>{children}</GlobalLoader>
            <Footer />
            <Toaster position="top-right" />
          </CartProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
