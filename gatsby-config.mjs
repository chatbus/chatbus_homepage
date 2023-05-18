import remarkGfm from "remark-gfm"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  siteMetadata: {
    title: "Chatbus Homepage",
    siteUrl: "https://chatbus.github.io",
    description: "메시지 이동을 쉽게, 단순하게, 자유롭게~",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://chatbus.github.io",
        sitemap: "https://chatbus.github.io/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/data/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `member`,
        path: `${__dirname}/data/member`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `faq`,
        path: `${__dirname}/data/faq`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `manual`,
        path: `${__dirname}/data/manual`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
            },
          },
        ],
      },
    },
  ],
}

export default config
