import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';

const PostTemplate = ({ data, pageContext: { title, author, body } }) => {
  console.log('template data', data);
  return (
    <Layout>
      <h1>{title}</h1>
      <p>by {author}</p>
      <MDXRenderer>{body}</MDXRenderer>
      <Link to="/">&larr; Back to Home</Link>
    </Layout>
  );
};
export default PostTemplate;

export const query = graphql`
  query Blah($title: String) {
    mdx(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
        slug
      }
    }
  }
`;
