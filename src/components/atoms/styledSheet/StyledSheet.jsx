import styled from 'styled-components';

export const StyledSheet = styled.pre`
    word-break: break-word;
    word-wrap: break-word;
    white-space: pre-wrap;
    background-color: ${({ theme }) => theme.sheetGrey};
    border: 1px solid #ccc;
    border-radius: 5px;
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    color: black;
    width: 100%;
`;
