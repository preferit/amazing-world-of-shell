import styled from 'styled-components';

export const StyledContent = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 65em;
    background: ${({ theme }) => theme.primaryLight};
`;
