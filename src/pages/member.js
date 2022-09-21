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
