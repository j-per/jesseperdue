import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';

const Overlay = ({ closeMobileMenu }) => {
  return (
    <OverlayStyles>
      <nav>
        <div onClick={closeMobileMenu}>
          <CgClose size='1.5em' color='white' className='close_mobile_nav' />
        </div>
        <ul>
          <li onClick={closeMobileMenu}>
            <Link to='/blog'>Blog</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </OverlayStyles>
  );
};

const OverlayStyles = styled.div`
  z-index: 10;
  height: 100vh;
  width: 100vw;
  background-color: rgba(53, 53, 53, 0.95);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  nav {
    ul {
      list-style: none;
      li {
        margin: 1rem;
      }
    }
  }
  a {
    transition: 250ms;
    text-decoration: none;
    color: white;
    &:hover {
      color: var(--primary);
    }
    font-size: 30px;
  }
  .close_mobile_nav {
    position: fixed;
    top: 1rem;
    left: 1rem;
  }
`;

export default Overlay;
