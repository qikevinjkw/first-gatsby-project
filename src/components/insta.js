import React from 'react';
import { useInsta } from '../hooks/useInsta';
import Image from 'gatsby-image';
import { css } from '@emotion/core';

export const Insta = () => {
  const instaData = useInsta();
  const d = instaData;
  console.log('insta data', d);
  return (
    <div>
      <h2>Instagram Posts from {instaData[0].username}</h2>
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        `}
      >
        {instaData.map(entry => {
          return (
            <a
              key={entry.id}
              href={`https://instagram.com/p/${entry.id}`}
              css={css`
                width: calc(33% - 1rem);
                margin: 0.5rem;
                transition: 200ms box-shadow linear;

                :focus,
                :hover {
                  box-shadow: 0 0px 40px #22222244;
                  z-index: 10;
                }
              `}
            >
              <Image
                css={css`
                  width: 100%;
                  * {
                    margin-top: 0px;
                  }
                `}
                fluid={entry.fluid}
                alt={entry.caption}
              />
            </a>
          );
        })}
      </div>
      <a href={`https://instagram.com/${instaData[0].username}`}>
        See more on instagram
      </a>
    </div>
  );
};
