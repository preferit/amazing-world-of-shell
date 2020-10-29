import React from 'react';
import { StyledTitleImg } from '../../atoms';

export const TitleImg = ({ imgPath, children }) => {

  return (
    <StyledTitleImg src={imgPath}>
      {children}
    </StyledTitleImg>
  );
};
