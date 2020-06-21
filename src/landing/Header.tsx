import * as React from 'react';
import styled from 'styled-components';
import { Typography } from '~/core/Typography';
import { Link } from '~/core/Link';

export const Header: React.FC = () => {
    return (
        <StyledHeader>
            <AppName>Zesty Bagels</AppName>
            <RightAligned>
                <HeaderLink route={'/login'}>Login</HeaderLink>
                <HeaderLink route={'/about'}>About</HeaderLink>
            </RightAligned>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    padding: 48px 64px;
    justify-content: space-between;
`;

const AppName = styled(Typography)``;

const HeaderLink = styled(Link)`
    padding-left: 32px;
`;

const RightAligned = styled.div``;
