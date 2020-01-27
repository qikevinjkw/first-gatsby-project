import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';

const PostTemplate = ({ pageContext: { title, author, body } }) => {
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
