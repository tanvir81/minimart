"use client";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({ children }) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  // If no Clerk key, skip ClerkProvider entirely
  if (!publishableKey) {
    return (
      <html lang="en">
        <body>
          <header className="flex justify-end items-center p-4 gap-4 h-16 shadow">
            <span className="text-gray-500 text-sm">Auth disabled</span>
          </header>
          {children}
        </body>
      </html>
    );
  }

  // Normal Clerk setup when key exists
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <html lang="en">
        <body>
          <header className="flex justify-end items-center p-4 gap-4 h-16 shadow">
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-purple-600 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
