import * as React from "react";
import MemberCard from "../components/memberCard";
import { graphql } from 'gatsby';

const MemberPage = ({data}) => {
  const members = data.allMdx.nodes;
  return (
      <MemberCard members={members} />
  );
};
export const query = graphql`
  query {
    allMdx(filter: {frontmatter: {slug: {eq: "member"}}}) {
    nodes {
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
        status
      }
      excerpt
    }
  }
  }`

export default MemberPage;
