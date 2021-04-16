import React from 'react';
import { GlobalStyles } from './src/styles/GlobalStyles';

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
);
