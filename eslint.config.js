const nextConfig = require('eslint-config-next/core-web-vitals')

module.exports = [
  ...nextConfig,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
]
