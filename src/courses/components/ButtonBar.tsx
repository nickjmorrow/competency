import styled from 'styled-components';

export const ButtonBar = styled.div`
    background-color: ${p => p.theme.colors.core.cs2};
    width: 480px;
    padding: 16px;
    border-radius: ${p => p.theme.border.borderRadius.br1};
    color: ${p => p.theme.colors.neutral.cs9};
    transition: all ${p => p.theme.transitions.fast};
    cursor: pointer;
    &: hover {
        background-color: ${p => p.theme.colors.core.cs1};
        transition: all ${p => p.theme.transitions.fast};
    }
`;
