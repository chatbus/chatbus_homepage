import * as React from "react";
import { graphql } from 'gatsby';
import { MDXProvider } from "@mdx-js/react"
import { motion, useScroll, useTransform } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = ({data, children }) => {
    const title = data.mdx.frontmatter.title;
    //const excerpt = data.mdx.excerpt;

  return (
      <>

        <MDXProvider >{children}</MDXProvider>

      </>
  );
}

export default IndexPage

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
    `

