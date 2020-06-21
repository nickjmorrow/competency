import * as React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { coursesSelectors } from '~/courses/state/coursesSelectors';
import { Typography } from '~/core/Typography';
import { instructorsApi } from '~/instructors';
import { CoursePlan } from '~/courses/types/CoursePlan';
import { Button } from '~/core/Button';

export const CoursePage: React.FC = () => {
    const { courseId } = useParams();
    const course = useSelector(coursesSelectors.getByCourseId(parseInt(courseId, 10)));
    const instructor = useSelector(instructorsApi.selectors.getByInstructorId(course.instructorId));
    const coursePlan = useSelector(coursesSelectors.getByCoursePlanId(course.coursePlanId));
    return (
        <Container>
            <Typography variant={'h2'}>{course.name}</Typography>
            <Typography>{instructor.name}</Typography>
            <Typography variant={'h3'}>Course Plan</Typography>
            {coursePlan ? <CoursePlanSummary coursePlan={coursePlan} /> : <ChooseCoursePlanButton />}
        </Container>
    );
};

const Container = styled.div``;

const CoursePlanSummary: React.FC<{ coursePlan: CoursePlan }> = ({ coursePlan }) => {
    return (
        <CoursePlanContainer>
            {coursePlan.learningObjectives.map(lo => (
                <LearningObjectiveContainer key={lo.learningObjectiveId}>{lo.title}</LearningObjectiveContainer>
            ))}
        </CoursePlanContainer>
    );
};

const CoursePlanContainer = styled.div``;

const LearningObjectiveContainer = styled.div``;

const ChooseCoursePlanButton: React.FC = () => {
    return <Button>Choose Course Plan</Button>;
};
