import React from 'react';
import { StyledStickyFooter } from '../../atoms';

export const StickyFooter = ({ children }) => {

  return (
    <StyledStickyFooter>
      {children}
    </StyledStickyFooter>
  );
};
