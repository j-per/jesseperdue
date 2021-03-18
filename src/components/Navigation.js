import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Overlay from './overlay';
import { CgMenuGridO } from 'react-icons/cg';
import gsap from 'gsap';

const Navigation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    gsap.from('.navigation_desktop ', {
      opacity: 0,
      y: -100,
      duration: 1,
      delay: 0.5,
    });
  }, []);

  return (
    <>
      <DesktopNav className='navigation_desktop '>
        <h2>
          <Link to='/'>Jesse Perdue</Link>
        </h2>
        <ul>
          <li>
            <Link to='/'>Posts</Link>
          </li>
          <li>
            <Link to='/'>Projects</Link>
          </li>
          <li>
            <Link to='/'>Contact</Link>
          </li>
        </ul>
      </DesktopNav>
      <MobileNavStyle>
        {click && <Overlay closeMobileMenu={closeMobileMenu} />}
        <h2>
          <Link to='/'>Jesse Perdue</Link>
        </h2>
        <nav>
          <a>
            <CgMenuGridO onClick={handleClick} size='2em' color='white' />
          </a>
        </nav>
      </MobileNavStyle>
    </>
  );
};

const DesktopNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  h2 {
    a {
      color: var(--green);
      font-size: 25px;
      transition: 500ms;
      &:hover {
        color: var(--purple);
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    justify-content: flex-end;
    align-items: center;
    li {
      margin-left: 2rem;
      a {
        &:hover {
          color: var(--purple);
        }
      }
    }
  }
  @media (max-width: 762px) {
    display: none;
  }
`;

const MobileNavStyle = styled.nav`
  margin-bottom: 1rem;
  display: none;
  @media (max-width: 762px) {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    margin-bottom: 40px;
    h2 {
      a {
        color: var(--green);
        font-size: 25px;
        transition: 500ms;
        &:hover {
          color: var(--purple);
        }
      }
    }
  }
`;

export default Navigation;
