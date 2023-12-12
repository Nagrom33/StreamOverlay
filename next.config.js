/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_SOCKET_SERVER: process.env.NEXT_SOCKET_SERVER,
    }
}

module.exports = nextConfig
