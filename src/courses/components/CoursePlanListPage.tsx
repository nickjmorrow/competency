import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { coursesSelectors } from '~/courses/state/coursesSelectors';
import { CoursePlanButtonBar } from '~/courses/components/CoursePlanButtonBar';
import { Link } from '~/core/Link';
import { Typography } from '~/core/Typography';

export const CoursePlanListPage: React.FC = () => {
    const coursePlans = useSelector(coursesSelectors.getCoursePlans);

    return (
        <Container>
            <Typography variant={'h2'}>Course Plans</Typography>
            <CoursePlansContainer>
                {coursePlans.map(c => (
                    <Link key={c.coursePlanId} route={`course-plans/${c.coursePlanId}`}>
                        <CoursePlanButtonBar key={c.coursePlanId} coursePlan={c} />
                    </Link>
                ))}
            </CoursePlansContainer>
        </Container>
    );
};

const Container = styled.div``;

const CoursePlansContainer = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 24px;
`;
