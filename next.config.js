/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    MONGO_URI:"mongodb+srv://musa:37894214el@cluster0.dlc9t.mongodb.net/notesdata?retryWrites=true&w=majority",
    JWT_SECRET:"hkHSADjjskASDDJOisdjaxsnKAJjakjznJASNJXKSAJXNKSXNJX",
    BASE_URL : 'https://my-markdown.vercel.app',
    OPEN_AI:"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"
  },
  reactStrictMode: true,
}

module.exports = nextConfig
