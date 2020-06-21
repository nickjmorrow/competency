import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { coursesSelectors } from '~/courses/state/coursesSelectors';
import { CoursePlanButtonBar } from '~/courses/components/CoursePlanButtonBar';
import { Link } from '~/core/Link';

export const CoursePlanListPage: React.FC = () => {
    const coursePlans = useSelector(coursesSelectors.getCoursePlans);

    return (
        <Container>
            {coursePlans.map(c => (
                <Link route={`course-plans/${c.coursePlanId}`}>
                    <CoursePlanButtonBar key={c.coursePlanId} coursePlan={c} />
                </Link>
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 24px;
`;
