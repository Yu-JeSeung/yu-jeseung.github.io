import { defineConfig } from "astro/config";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserPage = repo.endsWith(".github.io");

export default defineConfig({
  site: process.env.SITE_URL ?? "https://yu-jeseung.github.io",
  base: repo && !isUserPage ? `/${repo}` : "/",
  trailingSlash: "always"
});
