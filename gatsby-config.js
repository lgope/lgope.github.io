module.exports = {
  siteMetadata: {
    title: `Lakshman | Software Engineer`,
    description: `I’m Lakshman, A Software Engineer, from Bangladesh.`,
    author: `Lakshman`,
    siteUrl: 'https://lgope.github.io/',
    social: {
      twitter: 'LakshmanGope',
      instagram: 'lakshman_gope',
      linkedin: 'lakshman-gope-ba8847154',
      github: 'lgope',
      email: 'lakshman.gope2@gmail.com',
    },
    // name of the image for social website share, should be in static folder
    imageShare: `share.png`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-154878086-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
    `gatsby-plugin-use-dark-mode`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Montserrat`,
    //         subsets: [`latin`],
    //       },
    //       {
    //         family: `Montserrat`,
    //         variants: [`200`, `400`, `400i`, `600`, `600i`, `700`],
    //       },
    //     ],
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noreferrer',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lakshman | Software Engineer`,
        short_name: `Lakshman`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#212121`,
        theme_color: `#127EB1`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
