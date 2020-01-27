import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const useInsta = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 12) {
        nodes {
          username
          id
          likes
          caption
          localFile {
            childImageSharp {
              fluid(maxWidth: 120, maxHeight: 120) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return data.allInstaNode.nodes.map(node => {
    return {
      ...node.localFile.childImageSharp,
      id: node.id,
      caption: node.caption,
      likes: node.likes,
      username: node.username,
    };
  });
};
