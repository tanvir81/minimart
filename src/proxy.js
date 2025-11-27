// src/proxy.js

export default function proxy(req) {
  const backendUrl =
    process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";

  // Only proxy API routes
  if (req.nextUrl.pathname.startsWith("/api")) {
    return Response.redirect(`${backendUrl}${req.nextUrl.pathname}`);
  }

  // Let Next.js handle non-API routes normally
  return;
}

export const config = {
  matcher: ["/api/:path*"], // only run proxy for API routes
};
