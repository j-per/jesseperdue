import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyles className='ignorewidth'>
    <div className='footerstyles_wrapper'>
      <h2>
        <Link to='/'>Jesse Perdue</Link>
      </h2>
    </div>
    </FooterStyles>
  );
};

const FooterStyles = styled.footer`
  background: rgb(30, 38, 47);
  .footerstyles_wrapper {
    max-width: 1000px;
    margin: 0 auto;
    padding: 1rem;
  }
  a {
    color: var(--green);
  }
`;

export default Footer;
