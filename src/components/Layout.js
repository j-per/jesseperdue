import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import 'normalize.css';
import Navigation from './Navigation';
import Footer from './Footer';

const LayoutWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <GlobalStyles />
    <Typography />
    <Navigation />
    {children}
    <Footer />
  </LayoutWrapper>
);

export default Layout;
