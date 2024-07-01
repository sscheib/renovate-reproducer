module.exports = {
  secrets: {
    CRC_USERNAME: process.env.RENOVATE_CRC_USERNAME,
    CRC_PASSWORD: process.env.RENOVATE_CRC_PASSWORD,
  },
  allowedHeaders: [
    'Authorization',
  ],
  gitAuthor: 'Renovate <renovate@scheib.me>',
  hostRules: [
    {
      matchHost: 'registry.redhat.io',
      username: '{{ secrets.CRC_USERNAME }}',
      password: '{{ secrets.CRC_PASSWORD }}',
    },
  ],
};
