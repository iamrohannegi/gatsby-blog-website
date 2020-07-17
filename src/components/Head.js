import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title, description, children }) => (
    <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{ title ? title : 'Robin Singh'}</title>

        { children }
        <html lang="en" />
    </Helmet>
);

export default Head;