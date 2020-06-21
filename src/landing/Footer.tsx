import * as React from 'react';
import styled from 'styled-components';
import { Typography } from '~/core/Typography';

export const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <Typography>Nicholas Morrow</Typography>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    height: 48px;
    padding: 0 64px;
    display: flex;
    align-items: center;
`;
