import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import * as React from 'react';
import { Typography } from '~/core/Typography';

export const Link: React.FC<{ route: string; children: React.ReactNode; className?: string }> = ({
    route,
    children,
    className,
}) => {
    return (
        <StyledLink className={className} to={route}>
            <StyledTypography>{children}</StyledTypography>
        </StyledLink>
    );
};

const StyledLink = styled(RouterLink)`
    text-decoration: none;
`;

const StyledTypography = styled(Typography)`
    color: ${p => p.theme.colors.core.cs4};
    font-size: inherit;
`;
