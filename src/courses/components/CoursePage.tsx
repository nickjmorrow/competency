import * as React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { coursesSelectors } from '~/courses/state/coursesSelectors';
import { Typography } from '~/core/Typography';
import { LearningObjective } from '~/courses/components/LearningObjective';

export const CoursePage: React.FC = () => {
    const { courseId } = useParams();
    const course = useSelector(coursesSelectors.getByCourseId(parseInt(courseId, 10)));
    return (
        <Container>
            <Typography variant={'h2'}>{course.name}</Typography>
            <LearningObjectiveListContainer>
                {course.learningObjectives.map(lo => (
                    <LearningObjective key={lo.learningObjectiveId} learningObjective={lo} />
                ))}
            </LearningObjectiveListContainer>
        </Container>
    );
};

const Container = styled.div``;

const LearningObjectiveListContainer = styled.div``;
