const website = require("./website")

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const {
  siteMeta,
  tracking,
} = website

module.exports = {
  siteMetadata: {
    title: siteMeta.title,
    description: siteMeta.description,
    keywords: siteMeta.keywords,
    author: siteMeta.author,
    siteUrl: siteMeta.url,
    lang: siteMeta.language,
    icon: siteMeta.iconPath,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: [
					"G-V9VS2J4H1F", // Google Analytics / GA
				],
			},
		},
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMeta.title,
        short_name: siteMeta.title,
        description: siteMeta.description,
        lang: siteMeta.language,
        display: "standalone",
        icon: siteMeta.iconPath,
        start_url: `/`,
        background_color: siteMeta.backgroundColor,
        theme_color: siteMeta.themeColor,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-preload-fonts",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
          options: {
            props: {
              className: "svg",
            },
          },
        },
      },
    },
    "gatsby-plugin-react-axe",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: siteMeta.url,
      },
    },
    {
      resolve: "gatsby-plugin-facebook-pixel",
      options: {
        pixelId: tracking.facebookPixelId,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMeta.url,
        sitemap: `${siteMeta.url}/sitemap.xml`,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
        overlayDrafts: true,
        watchMode: process.env.NODE_ENV === 'development',
      },
    },
  ],
};
