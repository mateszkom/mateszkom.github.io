const { withContentlayer } = require('next-contentlayer')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrickMode: true,
  // output: 'export',
} //output: 'export'

module.exports = withContentlayer(withMDX(nextConfig))
