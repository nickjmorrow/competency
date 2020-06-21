import styled from 'styled-components';

export const Button = styled.button`
    padding: 14px 10px;
    outline: none;
    border: none;
    background-color: ${p => p.theme.colors.core.cs5};
    color: ${p => p.theme.colors.background};
    font-family: ${p => p.theme.typography.fontFamily.default};
    text-transform: uppercase;
    border-radius: ${p => p.theme.border.borderRadius.br1};
    cursor: pointer;
    transition: all ${p => p.theme.transitions.fast};
    margin: 0;
    &: hover {
        background-color: ${p => p.theme.colors.core.cs4};
        transition: all ${p => p.theme.transitions.fast};
    }
    &: focus {
        background-color: ${p => p.theme.colors.core.cs6};
        transition: all ${p => p.theme.transitions.fast};
    }
`;
