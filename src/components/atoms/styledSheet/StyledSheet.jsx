import styled from 'styled-components';

export const StyledSheet = styled.pre`
    word-break: break-word;
    word-wrap: break-word;
    white-space: pre-wrap;
    background-color: ${({ theme }) => theme.sheetGrey};
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    flex-driection: column;
    align-items: center;
    justify-content:center;
    padding: 9.5px;
    color: black;
    width:100%;
`;
