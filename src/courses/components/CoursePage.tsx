import * as React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { coursesSelectors } from '~/courses/state/coursesSelectors';
import { Typography } from '~/core/Typography';
import { instructorsApi } from '~/instructors';
import { CoursePlan } from '~/courses/types/CoursePlan';
import { Button } from '~/core/Button';
import { ChooseCoursePlanModal } from '~/courses/components/ChooseCoursePlanModal';
import { coursesActions } from '~/courses/state/coursesActions';

export const CoursePage: React.FC = () => {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    const course = useSelector(coursesSelectors.getByCourseId(parseInt(courseId, 10)));
    const instructor = useSelector(instructorsApi.selectors.getByInstructorId(course.instructorId));
    const coursePlan = useSelector(coursesSelectors.getByCoursePlanId(course.coursePlanId));
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const handleClick = (coursePlan: CoursePlan) => {
        dispatch(coursesActions.assignCoursePlanToCourse({ course, coursePlan }));
    };
    return (
        <Container>
            <Typography variant={'h2'}>{course.name}</Typography>
            <Typography>{instructor.name}</Typography>
            <Typography variant={'h3'}>Course Plan</Typography>
            {coursePlan ? (
                <CoursePlanSummary coursePlan={coursePlan} />
            ) : (
                <ChooseCoursePlanButton onClick={() => setIsModalOpen(true)} />
            )}
            <Typography variant={'h3'}>Students</Typography>
            <ChooseCoursePlanModal
                onClick={handleClick}
                isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
            />
        </Container>
    );
};

const Container = styled.div``;

const CoursePlanSummary: React.FC<{ coursePlan: CoursePlan }> = ({ coursePlan }) => {
    return (
        <CoursePlanContainer>
            {coursePlan.learningObjectives.map(lo => (
                <LearningObjectiveContainer key={lo.learningObjectiveId}>
                    <Typography>{lo.title}</Typography>
                </LearningObjectiveContainer>
            ))}
        </CoursePlanContainer>
    );
};

const CoursePlanContainer = styled.div``;

const LearningObjectiveContainer = styled.div`
    margin: 8px 0;
`;

const ChooseCoursePlanButton: React.FC<{ onClick: () => void }> = ({ onClick: handleClick }) => {
    return <Button onClick={handleClick}>Choose Course Plan</Button>;
};
