import * as React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { coursesSelectors } from '~/courses/state/coursesSelectors';
import { Typography } from '~/core/Typography';
import { LearningObjective } from '~/courses/components/LearningObjective';

export const CoursePlanPage: React.FC = () => {
    const { coursePlanId } = useParams();
    const coursePlan = useSelector(coursesSelectors.getByCoursePlanId(parseInt(coursePlanId, 10)))!;
    return (
        <Container>
            <Typography variant={'h2'}>{coursePlan.name}</Typography>
            <LearningObjectiveListContainer>
                {coursePlan.learningObjectives.map(lo => (
                    <LearningObjective key={lo.learningObjectiveId} learningObjective={lo} />
                ))}
            </LearningObjectiveListContainer>
        </Container>
    );
};

const Container = styled.div``;

const LearningObjectiveListContainer = styled.div``;
