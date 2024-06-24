/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    BASE_SITE_URL: process.env.BASE_SITE_URL,
    S3_BUCKET:process.env.S3_BUCKET,
    REGION_NAME:process.env.REGION_NAME,
    AWS_KEY:process.env.AWS_KEY,
    DATABASE_URL:process.env.DATABASE_URL,
    AWS_SECRET_KEY: process.env.AWS_BUCKET_SECRET_KEY
  }
}

module.exports = nextConfig
