const { withContentlayer } = require('next-contentlayer')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {} //output: 'export'

module.exports = withContentlayer(withMDX(nextConfig))
