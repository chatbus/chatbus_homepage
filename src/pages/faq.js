import * as React from "react";
import {graphql} from "gatsby";
import FaqCard from "../components/faqCard";

import { motion } from "framer-motion";

const FaqPage = ({data}) => {
  const faqs = data.allMdx.nodes;
  return (
    <div className="w-full text-center">
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.50 }}
      >
        <h2 className="mb-8 text-3xl font-bold leading-snug text-dark sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug md:pt-[50px] lg:pt-[100px]">FAQ</h2>
        <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
          There are many variations of passages of Lorem Ipsum available
          but the majority have suffered alteration in some form.
        </p>
        <FaqCard faqs={faqs}/>
      </motion.div>
    </div>
  );
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
