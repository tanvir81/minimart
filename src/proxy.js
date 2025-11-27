// proxy.js

const { createProxyMiddleware } = require("http-proxy-middleware");

const backendUrl = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";

module.exports = function (app) {
  // Always proxy API requests to your backend
  app.use(
    "/api",
    createProxyMiddleware({
      target: backendUrl,
      changeOrigin: true,
    })
  );

  // Optional: Clerk safeguard
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    console.log("⚠ Clerk key missing — skipping Clerk proxy setup");
    return;
  }

  // If Clerk is enabled, you could add extra routes here
  // app.use("/clerk", someClerkProxyMiddleware);
};
