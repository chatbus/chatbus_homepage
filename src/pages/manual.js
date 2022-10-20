import * as React from "react";
import { motion } from "framer-motion";
import { graphql } from 'gatsby';
import Navigator from "../components/navigator";

const ManualPage = ({data}) => {
  const menu = data.allMdx.nodes;
  return (
        <div className="w-full container">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.50 }}
            >
            <h2 className="text-center mb-8 text-3xl font-bold leading-snug text-dark sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug md:pt-[50px] lg:pt-[100px]">메뉴얼</h2>
            <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed text-center">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
            </p>
            <div className="-mx-4 flex mt-[60px]">
                <Navigator menu={menu}></Navigator>
                <div className="w-[calc(100%_-_10rem)] ml-40 p-8">
                    {menu.map((value, index)=>
                        (<div className="mb-20" key={index} id={value.id}>
                            <h3 className="text-2xl font-semibold mb-8" >{value.frontmatter.title}</h3>
                            <p>{value.excerpt}
                            </p>
                        </div>)
                    )}
                </div>
            </div>
            </motion.div>
        </div>
  );
};

export default ManualPage;

export const query = graphql`
query {
    allMdx( 
        filter: {frontmatter: {slug: {eq: "manual"}}}
        sort: {fields: frontmatter___order, order: ASC}
    ) {
        nodes {
          id
          frontmatter {
            title
            order
          }
          excerpt(pruneLength: 10000)
        }
  }
 }`
