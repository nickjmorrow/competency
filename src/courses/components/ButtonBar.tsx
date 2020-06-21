import styled from 'styled-components';

export const ButtonBar = styled.div`
    background-color: ${p => p.theme.colors.core.cs5};
    max-width: 280px;
    padding: 16px;
    border-radius: ${p => p.theme.border.borderRadius.br1};
    color: ${p => p.theme.colors.neutral.cs1};
    transition: all ${p => p.theme.transitions.fast};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    &: hover {
        background-color: ${p => p.theme.colors.core.cs4};
        transition: all ${p => p.theme.transitions.fast};
    }
`;
