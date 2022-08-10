/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["fakestoreapi.com"]
  } ,
  env:{
    Stripe_Public_Key :process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  }
}

module.exports = nextConfig
