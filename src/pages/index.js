import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { usePosts } from '../hooks/usePosts';
import PostPreview from '../components/post-preview';
import { Insta } from '../components/insta';
import BackgroundImage from 'gatsby-background-image';
import { css } from '@emotion/core';

export default ({ data }) => {
  console.log('index data', data);
  const posts = usePosts();

  return (
    <>
      <BackgroundImage
        fluid={data.allFile.nodes[0].childImageSharp.fluid}
        css={css`
          * {
            margin-top: 0;
          }
          height: 150px;
        `}
      ></BackgroundImage>
      <Layout>
        <h2>My Blog</h2>
        {posts.map(post => {
          return (
            <article key={post.slug}>
              <PostPreview post={post} />
            </article>
          );
        })}
        <Insta />
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query {
    allFile(filter: { name: { eq: "horizontalmountain" } }) {
      nodes {
        name
        childImageSharp {
          fluid(
            maxWidth: 1600
            maxHeight: 1600
            traceSVG: { color: "purple" }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`;
