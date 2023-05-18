import path from "path"
import { compileMDXWithCustomOptions } from "gatsby-plugin-mdx"
import remarkHeadingsPlugin from "./remark-headings-plugin.mjs"

export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000,
      ignored: '**/node_modules',
    },
  })
};

export const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `slug`,
      value: `/$(node.frontmatter.slug}`
    })
  }
}

export const createSchemaCustomization = async ({ getNode, getNodesByType, pathPrefix, reporter, cache, actions, schema, store }) => {
  const { createTypes } = actions

  const headingsResolver = schema.buildObjectType({
    name: `Mdx`,
    fields: {
      headings: {
        type: `[MdxHeading]`,
        async resolve(mdxNode) {
          const fileNode = getNode(mdxNode.parent)

          if (!fileNode) {
            return null
          }

          const result = await compileMDXWithCustomOptions(
              {
                source: mdxNode.body,
                absolutePath: fileNode.absolutePath,
              },
              {
                pluginOptions: {},
                customOptions: {
                  mdxOptions: {
                    remarkPlugins: [remarkHeadingsPlugin],
                  },
                },
                getNode,
                getNodesByType,
                pathPrefix,
                reporter,
                cache,
                store,
              }
          )

          if (!result) {
            return null
          }

          return result.metadata.headings
        }
      }
    }
  })

  createTypes([
    `#graphql
      type Mdx implements Node {
        timeToRead: Float @proxy(from: "fields.timeToRead.minutes")
        wordCount: Int @proxy(from: "fields.timeToRead.words")
      }
      type MdxHeading {
        value: String
        depth: Int
      }
    `,
    headingsResolver,
  ])
}

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
export const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(node => {
    // Don't create a page for src/pages/chart-info.mdx since this already gets created
    //if (node.frontmatter.slug !== `/chart-info`) {
    console.log(node.frontmatter.slug)
      if (node.frontmatter.slug === `/index1`) {
        // For /blog-2 define a contentFilePath and thus have two layouts. The src/components/layout.jsx and nested inside that the src/templates/posts.jsx
        createPage({
          path: node.frontmatter.slug,
          component: `${path.resolve(
              `./src/templates/pages.jsx`
          )}?__contentFilePath=${node.internal.contentFilePath}`,
          context: { id: node.id },
        })
      } else {
        createPage({
          path: node.frontmatter.slug,
          component: node.internal.contentFilePath,
          context: { id: node.id },
        })

      }
    //}
  })
}