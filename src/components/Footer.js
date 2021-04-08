import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyles>
      <h2>
        <Link to='/'>Jesse Perdue</Link>
      </h2>
    </FooterStyles>
  );
};

const FooterStyles = styled.footer`
  background: rgb(30, 38, 47);
  a {
    color: var(--green);
  }
`;

export default Footer;
