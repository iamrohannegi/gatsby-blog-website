import React from 'react';
import styled from 'styled-components';
import { FaAlgolia } from 'react-icons/fa';

const PoweredByText = styled.div`
  color: var(--primaryTextColor);
  font-size: 1.3rem;
  text-align: end;
  padding: 0.5rem 1rem;
  a {
    color: inherit;
  }
`;

const PoweredBy = () => (
    <PoweredByText >
      <span>Powered by{` `}</span>
      <a href="https://algolia.com" target="_blank" rel="noopener noreferrer">
        <FaAlgolia size="1em" /> Algolia
      </a>
    </PoweredByText>
);

export default PoweredBy;