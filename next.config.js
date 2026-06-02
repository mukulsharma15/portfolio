/** @type {import('next').NextConfig} */
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();

if (configuredBasePath && !configuredBasePath.startsWith("/")) {
  throw new Error("NEXT_PUBLIC_BASE_PATH must start with '/' when provided.");
}

const basePath =
  configuredBasePath && configuredBasePath !== "/"
    ? configuredBasePath.endsWith("/")
      ? configuredBasePath.slice(0, -1)
      : configuredBasePath
    : undefined;

const nextConfig = {
  output: "export",
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
