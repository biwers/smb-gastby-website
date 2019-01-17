module.exports = {
  siteMetadata: {
    title: 'SMB Group Iraq',
    siteUrl: `https://test.krebka.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#0F7094`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'SMB Group Iraq',
        short_name: 'SMB Group',
        start_url: '/',
        background_color: '#fdfdfd',
        theme_color: '#0F7094',
        display: 'minimal-ui',
        icon: 'src/images/smb-logo.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
