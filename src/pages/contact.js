import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SocialLinks from '../components/SocialLinks';
import NewsLetterForm from '../components/NewsletterForm';

const NewsLetterContainer = styled.div`
  margin: 6rem 0;

  input {
    margin-top: 2rem;
    width: 50%;
  }
  button {
    width: 50%;
  }

  @media (max-width: 600px) {
    input, button {
      width: 100%;
    }
  }
`;

const ContactPage = () => {
  return (
    <Layout title="Contact | Robin Singh">
        <h1>Contact</h1>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quia modi, beatae obcaecati recusandae molestiae.</p>
        <SocialLinks />

        <NewsLetterContainer>
          <h2>Subscribe to my Newsletter.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veniam velit fugit adipisci cumque. Vel.</p>
          <NewsLetterForm />
        </NewsLetterContainer>
    </Layout>
  );
}

export default ContactPage;