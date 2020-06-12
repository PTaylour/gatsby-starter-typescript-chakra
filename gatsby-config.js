const siteMetadata = {
  name: 'Starter for Typesciprt and Chakra',
  description: 'Starter for Typesciprt and Chakra',
};

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-accessibilityjs',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        ...siteMetadata,
        display: 'minimal-ui',
        theme_color: '#62FFD2',
        background_color: '#FBFCFE',
        icon: 'src/assets/favicon.png',
        lang: 'en-GB',
        start_url: '/',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
  ],
};
