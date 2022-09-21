import * as React from "react";
import Layout from "../components/layout";
import MemberCard from "../components/memberCard";
import { graphql } from 'gatsby';

const MemberPage = ({data}) => {
  const members = data.allMdx.nodes;
  return (
    <Layout pageTitle="멤버 정보">
      <MemberCard members={members} />
    </Layout>
  );
};
export const query = graphql`
  query {
    allMdx(filter: {frontmatter: {slug: {eq: "member"}}}) {
    nodes {
      id
      frontmatter {
        name
        github
        homepage
        linkdin
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
        projects
      }
      excerpt
    }
  }
  }`

export default MemberPage;
