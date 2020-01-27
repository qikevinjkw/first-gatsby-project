import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import Image from 'gatsby-image';

const PostPreview = ({ post }) => {
  return (
    <div
      css={css`
        border-bottom: 1px solid #ddd;
        margin-top: 0.75rem;
        padding-bottom: 1rem;
        display: flex;

        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <Link
        to={`/${post.slug}`}
        css={css`
          width: 100px;
          margin: 1rem 1rem 0 0;
        `}
      >
        <Image
          fluid={post.image.childImageSharp.fluid}
          css={css`
            * {
              margin-top: 0;
            }
          `}
          alt={post.title}
        />
      </Link>
      <div>
        <h3>
          <Link to={`/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <Link to={`/${post.slug}`}>Read this post &rarr;</Link>
      </div>
    </div>
  );
};

export default PostPreview;
