"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { useCart } from "../context/CartContext";
import { FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const { user } = useUser();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update

  return (
    <nav className="sticky top-0 bg-base-100 shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="MiniMart Logo" className="h-18 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className="nav-link transition-colors duration-300 hover:scale-105 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/items"
            className="nav-link transition-colors duration-300 hover:scale-105 hover:text-blue-600"
          >
            Items
          </Link>
          <Link
            href="/about"
            className="nav-link transition-colors duration-300 hover:scale-105 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="nav-link transition-colors duration-300 hover:scale-105 hover:text-blue-600"
          >
            Contact
          </Link>

          {/* Cart badge */}
          <Link
            href="/cart"
            className="relative transition-colors duration-300 hover:text-blue-600"
          >
            <FiShoppingCart className="w-6 h-6" />
            {mounted && cartCount > 0 && (
              <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs bg-blue-600 text-white rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Desktop auth */}
        <div className="hidden lg:flex items-center gap-4">
          <SignedOut>
            <SignInButton className="btn btn-accent text-white" />
            <SignUpButton>
              <button className="btn btn-primary">Sign Up</button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <div className="relative">
              <button
                onClick={() => setUserOpen((v) => !v)}
                className="btn btn-ghost flex items-center gap-2 hover:btn-primary transition-colors duration-300"
              >
                <span>
                  {user?.fullName || user?.primaryEmailAddress?.emailAddress}
                </span>
                <img
                  src={user?.imageUrl}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </button>

              {userOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-2 space-y-2">
                  <p className="px-3 py-2 text-sm text-gray-600 border-b">
                    Signed in as <br />
                    <span className="font-medium">
                      {user?.fullName ||
                        user?.primaryEmailAddress?.emailAddress}
                    </span>
                  </p>
                  <Link
                    href="/add-product"
                    className="block px-3 py-2 rounded hover:bg-secondary hover:text-white"
                  >
                    Add Product
                  </Link>
                  <Link
                    href="/manage-products"
                    className="block px-3 py-2 rounded hover:bg-secondary hover:text-white"
                  >
                    Manage Products
                  </Link>
                  <div className="px-3 py-2 rounded hover:bg-gray-100 cursor-pointer">
                    <SignOutButton>
                      <span className="text-red-600 font-medium">Sign Out</span>
                    </SignOutButton>
                  </div>
                  <UserButton afterSignOutUrl="/" />
                </div>
              )}
            </div>
          </SignedIn>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden btn btn-ghost"
          aria-label="Menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="lg:hidden bg-base-100 border-t">
          <div className="max-w-6xl mx-auto px-6 py-4 space-y-3">
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                href="/items"
                onClick={() => setMobileOpen(false)}
                className="hover:text-blue-600"
              >
                Items
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="hover:text-blue-600"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="hover:text-blue-600"
              >
                Contact
              </Link>

              {/* Cart badge in mobile */}
              <Link
                href="/cart"
                className="hover:text-blue-600"
                onClick={() => setMobileOpen(false)}
              >
                <div className="relative inline-block">
                  <FiShoppingCart className="w-6 h-6" />
                  {mounted && cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 px-1.5 py-0.5 text-xs bg-blue-600 text-white rounded-full">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <SignedOut>
                <SignInButton className="btn btn-accent text-white" />
                <SignUpButton>
                  <button className="btn btn-primary">Sign Up</button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <p className="px-3 py-2 text-sm text-gray-600">
                  {user?.fullName || user?.primaryEmailAddress?.emailAddress}
                </p>
                <Link
                  href="/add-product"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded hover:bg-secondary hover:text-white"
                >
                  Add Product
                </Link>
                <Link
                  href="/manage-products"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded hover:bg-secondary hover:text-white"
                >
                  Manage Products
                </Link>
                <div
                  className="px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  <SignOutButton>
                    <span className="text-red-600 font-medium">Sign Out</span>
                  </SignOutButton>
                </div>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
