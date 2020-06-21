import * as React from 'react';
import styled from 'styled-components';
import { Collapse } from 'react-collapse';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { coursesSelectors } from '~/courses/state/coursesSelectors';
import { Typography } from '~/core/Typography';
import { instructorsApi } from '~/instructors';
import { CoursePlan } from '~/courses/types/CoursePlan';
import { Button } from '~/core/Button';
import { ChooseCoursePlanModal } from '~/courses/components/ChooseCoursePlanModal';
import { coursesActions } from '~/courses/state/coursesActions';
import { Student, studentsApi } from '~/students';
import { Link } from '~/core/Link';
import { Course } from '~/courses/types/Course';

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
    const students = useSelector(studentsApi.selectors.getStudents);
    const studentsInCourse = students.filter(s => course.studentIds.includes(s.studentId));
    return (
        <Container>
            <Typography variant={'h2'}>{course.name}</Typography>
            <Typography>{instructor.name}</Typography>
            <Typography variant={'h3'}>Students</Typography>
            {studentsInCourse.map(s => (
                <StudentCard key={s.studentId} student={s} course={course} coursePlan={coursePlan} />
            ))}

            {coursePlan ? (
                <>
                    <Typography variant={'h3'}>Course Plan: {coursePlan.name}</Typography>
                    <CoursePlanSummary coursePlan={coursePlan} />
                </>
            ) : (
                <>
                    <Typography variant={'h3'}>Course Plan</Typography>
                    <ChooseCoursePlanButton onClick={() => setIsModalOpen(true)} />
                </>
            )}
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
            <Typography variant={'h4'}>Learning Objectives</Typography>
            {coursePlan.learningObjectives.map(lo => (
                <LearningObjectiveContainer key={lo.learningObjectiveId}>
                    <Typography variant={'h5'}>{lo.title}</Typography>
                    {lo.projects.map(p => {
                        return (
                            <Typography key={p.projectId} variant={'h6'}>
                                {p.title}
                            </Typography>
                        );
                    })}
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

const StudentCard: React.FC<{ student: Student; course: Course; coursePlan?: CoursePlan }> = ({
    student,
    course,
    coursePlan,
}) => {
    return (
        <StudentCardContainer>
            <Link route={`/courses/${course.courseId}/students/${student.studentId}`}>
                <Typography
                    style={{
                        cursor: coursePlan ? 'pointer' : 'default',
                        margin: '0 0 8px 0',
                        display: 'block',
                        width: 'max-content',
                        color: 'inherit',
                    }}
                >
                    {student.name}
                </Typography>
            </Link>
        </StudentCardContainer>
    );
};

const StudentCardContainer = styled.div``;
