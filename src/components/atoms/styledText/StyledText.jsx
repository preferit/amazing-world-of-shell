import styled from 'styled-components';

export const StyledText = styled.span`
    background-image: linear-gradient(to left, violet, indigo, green, blue, yellow, orange, red);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
    transition: 1s;
    &:hover {
        color: ${({ theme }) => theme.primaryHover};
        background-image: initial;
        background-clip: initial;
      }
`