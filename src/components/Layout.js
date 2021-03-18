import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import 'normalize.css';
import Navigation from './Navigation';

const LayoutWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem 1rem;
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <GlobalStyles />
    <Typography />
    <Navigation />
    {children}
  </LayoutWrapper>
);

export default Layout;
