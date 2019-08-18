const withDefaults = require(`./utils/default-options`);

module.exports = themeOptions => {
  const options = withDefaults(themeOptions);
  const { mdx = true } = themeOptions;
  return {
    siteMetadata: {
      title: `Blog Title Placeholder`,
      author: `Name Placeholder`,
      description: `Description placeholder`,
      social: [
        {
          name: `Twitter`,
          url: `https://twitter.com/gatsbyjs`
        },
        {
          name: `GitHub`,
          url: `https://github.com/gatsbyjs`
        }
      ]
    },
    plugins: [
      mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                markdownCaptions: true,
                maxWidth: 1024,
                wrapperStyle: fluidResult =>
                  `flex:${_.round(fluidResult.aspectRatio, 2)}; width:100%`
              }
            },
            { resolve: `gatsby-remark-copy-linked-files` },
            { resolve: `gatsby-remark-smartypants` },
            {
              resolve: `gatsby-remark-figure-caption`
            }
          ],
          remarkPlugins: [require(`remark-slug`)]
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.contentPath || `content/posts`,
          name: options.contentPath || `content/posts`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.assetPath || `content/assets`,
          name: options.assetPath || `content/assets`
        }
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      "gatsby-plugin-theme-ui"
    ].filter(Boolean)
  };
};
