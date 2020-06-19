import React from 'react';
import styled from 'styled-component';

const Heading  = styled.h1`
    
`;

const ContentHeader = ({ title, children}) => {
    return (
        <header>
            { children ? children : 
              <Heading>{ title }</Heading>
            }
        </header>
    );
};

export default Header;