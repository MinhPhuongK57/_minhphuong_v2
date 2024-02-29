/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer && config.node) {
            delete config.node.fs
        }

        return config
    },
}

module.exports = nextConfig
