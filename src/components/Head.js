import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title, children }) => (
    <Helmet>
        <meta charSet="utf-8" />
        <title>{ title ? title : 'Robin Singh'}</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        { children }
    </Helmet>
);

export default Head;