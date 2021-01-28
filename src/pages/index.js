import React from "react";

import Layout from '../components/Layout';
import RecentPosts from '../components/RecentPosts';

const IndexPage = () => {
  return (
    <Layout title="Home | Site Name" description="Home Page">
      <h1> Home </h1>
      <p>This is my front page people!.</p>
      <div style={{"height": "800px"}}>
      </div>
      <RecentPosts />
    </Layout>
  );
}

export default IndexPage; 
