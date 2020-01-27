import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { usePosts } from '../hooks/usePosts';
import PostPreview from '../components/post-preview';
import { Insta } from '../components/insta';

export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <h1>Home</h1>
      <Link to="/about/">About</Link>

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
  );
};
