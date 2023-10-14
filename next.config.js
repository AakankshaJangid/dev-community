/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
// next.config.js
module.exports = {
     webpack: (config, { isServer }) => {
       // Add a new rule for loading binary files.
       config.module.rules.push({
         test: /\.node$/,
         use: 'file-loader',
       });
   
       return config;
     },
   };
   
