import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyles className='ignorewidth'>
      <div className='footerstyles_wrapper'>
        <div className='footerstyles_heading_wrapper'>
          <h2>
            <Link to='/'>Jesse Perdue</Link>
          </h2>
          <p>Jesse Perdue © 2020 — Present</p>
        </div>
        <div className='footerstyles_links_wrapper'>
          <p>Links</p>
          <Link to='/blog'>Blog</Link>
          <a href='https://github.com/j-per' target='_blank' rel='noreferrer'>
            Github
          </a>
          <a
            href='https://twitter.com/jess90perdue'
            target='_blank'
            rel='noreferrer'
          >
            Twitter
          </a>
          <a
            href='https://www.notion.so/Jesse-Perdue-5bfb19bd0b5a4394a9a54759025c44b3'
            target='_blank'
            rel='noreferrer'
          >
            Resume
          </a>
        </div>
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
    display: flex;
    justify-content: space-between;
    align-content: center;
    h2 {
      margin: 0;
    }
    a {
      color: var(--green);
    }
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }
  .footerstyles_heading_wrapper {
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  .footerstyles_links_wrapper {
    p {
      color: var(--green);
      text-decoration: underline;
    }
    a {
      display: block;
      margin-bottom: 0.5rem;
      color: white;
      transition: 250ms ease-in-out;
      &:hover {
        color: var(--purple);
      }
    }
  }
`;

export default Footer;
