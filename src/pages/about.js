import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>About page...</p>
      <Link to="/">Home page</Link>
    </Layout>
  );
};
