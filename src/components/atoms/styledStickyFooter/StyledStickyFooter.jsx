import styled from 'styled-components';

export const StyledStickyFooter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.sheetGrey};;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 5px;
`;
