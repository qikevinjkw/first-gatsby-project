import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
            image {
              childImageSharp {
                fluid(maxWidth: 100, maxHeight: 100) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(({ frontmatter, excerpt }) => ({
    excerpt,
    ...frontmatter,
  }));
};

// duotone: { shadow: "#663399", highlight: "#ddbbff" }
