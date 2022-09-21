import * as React from "react";
import Layout from "../components/layout";
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
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
    <Layout pageTitle="프로젝트 소개">
        <div className="w-full text-center">
            <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">{title}</p>
            <div className="-mx-4 flex flex-wrap mt-[60px]">
                {excerpt}
            </div>
        </div>
    </Layout>
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
