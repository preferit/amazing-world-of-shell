import styled from 'styled-components';

export const StyledRightSideNav = styled.nav`

    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.sheetGrey};
    text-align: left;
    padding: 2rem;
    position: fixed;
    top: 0;
    right: 0;
    float: right;
    ol {
      background: ${({ theme }) => theme.greyTone}
    }
    li {
      font-size: 1rem;
    }
`;
