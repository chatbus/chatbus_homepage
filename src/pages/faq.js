import * as React from "react";
import Layout from "../components/layout";
import {graphql} from "gatsby";
import FaqCard from "../components/faqCard";
const FaqPage = ( {data} ) => {
  const faqs = data.allMdx.nodes;
  return <Layout pageTitle="FAQ">
    <div className="w-full text-center">
      <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
        There are many variations of passages of Lorem Ipsum available
        but the majority have suffered alteration in some form.
      </p>
      <FaqCard faqs={faqs}/>
    </div>
  </Layout>;
};

export const query = graphql`
  query {
    allMdx(filter: {frontmatter: {slug: {eq: "faq"}}}) {
    nodes {
      id
      frontmatter {
        title
      }
      excerpt
    }
  }
 }
`

export default FaqPage;
