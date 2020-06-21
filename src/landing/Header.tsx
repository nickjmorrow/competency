import * as React from 'react';
import styled from 'styled-components';
import { Typography } from '~/core/Typography';
import { Link } from '~/core/Link';

export const Header: React.FC = () => {
    return (
        <StyledHeader>
            <AppName variant={'h1'}>Zesty Bagels</AppName>
            <RightAligned>
                <HeaderLink route={'/login'}>Hello, Jane Smith</HeaderLink>
                <HeaderLink route={'/about'}>Support</HeaderLink>
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

const AppName = styled(Typography)`
    margin: 0;
`;

const HeaderLink = styled(Link)`
    padding-left: 32px;
    font-size: 18px;
`;

const RightAligned = styled.div``;
