import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';

import Button from '../components/Button';

const Input = styled.input`
    border: none;
    border-radius: 20px;
    padding: 1rem 2rem;
    outline: none;
    width: 100%;
`;

const NewsletterForm = () => {
    const [email, setEmail] = useState('');
    const [result, setResult] = useState('');
    return (result ? 
        <p>Thanks for subscribing</p> :
        (   
            <form onSubmit={async (e) => { 
                e.preventDefault();
                const mail = email.trim();
                if(mail){
                    const res = await addToMailchimp(mail);
                    setResult(res.result);
                    if(res.result === 'error'){
                        window.open('http://eepurl.com/g8S8D9', '_blank');
                    }
                }
                setEmail('');
            }}>
                <Input type="email" name="email" autoComplete="email" placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}/>
                <Button margin="2rem 0 0 0" hoverBgColor="#F52F57">Submit</Button>
            </form>      
        )
    );
};

export default NewsletterForm;

