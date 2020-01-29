import React from 'react';
import { usePosts } from '../hooks/usePosts';
import PostPreview from '../components/post-preview';
import { Insta } from '../components/insta';

export default ({}) => {
  const posts = usePosts();

  return (
    <>
      <h2>My Blogs</h2>
      {posts.map(post => {
        return (
          <article key={post.slug}>
            <PostPreview post={post} />
          </article>
        );
      })}
      <Insta />
    </>
  );
};
