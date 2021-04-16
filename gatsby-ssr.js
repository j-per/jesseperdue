import React from 'react';
import Layout from './src/components/Layout';
import GlobalStyles from './src/styles/GlobalStyles';

export function wrapPageElement({ element, props }) {
  return (
    <GlobalStyles>
      <Layout {...props}>{element}</Layout>;
    </GlobalStyles>
  );
}
