import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
    // Necesario porque cada idioma tiene su propio layout raíz (html lang distinto).
    globalNotFound: true,
  },
  images: {
    qualities: [75],
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // Rutas del sitio actual que probablemente usan los QR de mesa (/menu/cancun tiene su propia página).
  async redirects() {
    return [
      { source: "/menu/playa", destination: "/", permanent: false },
      { source: "/menu/playa/en", destination: "/en", permanent: false },
    ];
  },
};

export default nextConfig;
