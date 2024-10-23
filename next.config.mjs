/** @type {import('next').NextConfig} */
const nextConfig = defineConfig({
    output: "server",
    adapter: vercel(),
    integrations: [React(), tailwind()]
});

export default nextConfig;
