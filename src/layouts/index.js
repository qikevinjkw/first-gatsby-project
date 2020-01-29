import React from 'react';
import { Global, css } from '@emotion/core';
import Header from '../components/header';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery } from 'gatsby';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "horizontalmountain" } }) {
        nodes {
          name
          childImageSharp {
            fluid(
              maxWidth: 1600
              maxHeight: 1600 # traceSVG: { color: "purple" }
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-size: 18px;
            line-height: 1.4;
          }

          > div {
            margin-top: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;
            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />

      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <BackgroundImage
        fluid={data.allFile.nodes[0].childImageSharp.fluid}
        css={css`
          * {
            margin-top: 0;
          }
          height: 150px;
        `}
      ></BackgroundImage>
      <Header />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 550px;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
