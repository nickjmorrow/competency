import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { coursesSelectors } from '~/courses/state/coursesSelectors';
import { CoursePlanButtonBar } from '~/courses/components/CoursePlanButtonBar';

export const CoursePlanListPage: React.FC = () => {
    const coursePlans = useSelector(coursesSelectors.getCoursePlans);

    return (
        <Container>
            {coursePlans.map(c => (
                <CoursePlanButtonBar key={c.coursePlanId} course={c} />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 24px;
`;
