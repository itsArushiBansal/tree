import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "http://localhost:4321", // Update with your actual site URL
  integrations: [mdx(), sitemap()],

  // The correct configuration for content directory:
  contentDir: "./src/content", // Ensures your content folder is correctly located inside 'src'

  // Vercel Adapter for deployment
  output: "server",
  adapter: vercel(),
});
