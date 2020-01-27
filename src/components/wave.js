import React from 'react';
import { useState } from 'react';
import { css } from '@emotion/core';

export const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

  return (
    <button
      css={css`
        background: rebeccapurple;
        border: none;
        color: white;
        font-size: 1.25rem;
      `}
      onClick={() => {
        setWaves(prev => prev + 1);
      }}
    >
      {label}
    </button>
  );
};
