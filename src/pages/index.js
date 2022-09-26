import * as React from "react";
import { graphql } from 'gatsby';
import { motion } from "framer-motion";

const IndexPage = ({data}) => {
    const title = data.mdx.frontmatter.title;
    const excerpt = data.mdx.excerpt;
    console.log("%c" +
        "💖╔═════════════════════════════════════════╗💜\n" +
        "💘    ________          __  ____             🤎\n" +
        "🧡   / ____/ /_  ____ _/ /_/ __ )__  _______ 💙\n" +
        "💛  / /   / __ \\/ __ `/ __/ __  / / / / ___/ 💚\n" +
        "💚 / /___/ / / / /_/ / /_/ /_/ / /_/ (__  )  💛\n" +
        "💙 \\____/_/ /_/\\__,_/\\__/_____/\\__,_/____/   🧡\n"+
        "🤎   ^_^  Welcome to ChatBus Console~  ^_^   💘\n"+
        "💜╚═════════════════════════════════════════╝💖", 'color: yellow; background: black; font-size: 15px;');

  return (
        <div className="w-full text-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.50 }}
            >
            <h2 className="mb-8 text-3xl font-bold leading-snug text-dark sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug md:pt-[50px] lg:pt-[100px]">프로젝트 소개</h2>
            <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">{title}</p>

            <div className="-mx-4 flex flex-wrap mt-[60px]">
                {excerpt}
            </div>
            </motion.div>
        </div>
  );
};
export const query = graphql`
  query { 
    mdx(frontmatter: {slug: {eq: "index"}}) {
        id
        frontmatter{
            title
        }
        excerpt
      }
    }
    `
export default IndexPage;
