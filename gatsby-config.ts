import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Feed The Mogul`,
    description: `Grunge Stoner Punk Rock from Budapest.`,
    siteUrl: `https://www.feedthemogul.com`,
    image: `/BIK00628-og.png`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  trailingSlash: 'ignore',
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Reenie+Beanie&family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/favicon-pink-512x512.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-CYWTWGYX94'],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `awlvr4mc`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
        watchMode: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: 'awlvr4mc',
        dataset: 'production',
        // altFieldName: 'alt',
        // warnOnMissingAlt: process.env.NODE_ENV === 'development',
        // Additional params to pass to @sanity/image-url for every image. The
        // default is shown here, so you can omit the directive if you are happy
        // with what you see here.
        defaultImageConfig: {
          quality: 75,
          fit: 'max',
          auto: 'format',
        },
      },
    },
    `gatsby-plugin-sitemap`,
  ],
};

export default config;
