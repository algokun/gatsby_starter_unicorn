module.exports = {
  siteMetadata: {
    title: `My Portfolio`,
    author: `Mohan Talupula`,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi recusandae eos vel provident quod similique facilis error vero quisquam omnis?`,
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
    {
      resolve: "gatsby_theme_unicorn",
      options: {
        basePath: `/blog`
      }
    }
  ]
};
