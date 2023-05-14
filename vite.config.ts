import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";
import vercel from "vite-plugin-vercel";
import vercelSsr from "@magne4000/vite-plugin-vercel-ssr";

const config: UserConfig = {
  plugins: [
    react(),
    ssr({
      prerender: true,
    }),
    vercel(),
    vercelSsr(),
  ],
  vercel: {
    additionalEndpoints: [
      {
        source: "_api/edge-config.ts",
        destination: "api/edge-config",
        edge: true,
      },
    ],
  },
};

export default config;
