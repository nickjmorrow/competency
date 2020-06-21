import * as React from 'react';
import styled from 'styled-components';
import { Course } from '~/courses/types/Course';
import { Link } from '~/core/Link';
import { Typography } from '~/core/Typography';
import { ButtonBar } from '~/courses/components/ButtonBar';
import { useSelector } from 'react-redux';
import { coursesSelectors } from '~/courses/state/coursesSelectors';

export const CourseListPage: React.FC = () => {
    const courses = useSelector(coursesSelectors.getCourses);
    return (
        <Container>
            <Typography variant={'h2'}>Courses</Typography>
            <CoursesContainer>
                {courses.map(c => (
                    <CourseButtonBar key={c.courseId} course={c} />
                ))}
            </CoursesContainer>
        </Container>
    );
};

const Container = styled.div``;

const CoursesContainer = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 24px;
`;

const CourseButtonBar: React.FC<{ course: Course }> = ({ course }) => {
    const coursePeriod = useSelector(coursesSelectors.getByCoursePeriodId(course.coursePeriodId));
    return (
        <Link route={`/courses/${course.courseId}`}>
            <ButtonBar>
                <Typography colorVariant={'inherit'}>{course.name}</Typography>
                <div>
                    <Typography colorVariant={'inherit'}>{course.schedule}</Typography>
                    <Typography colorVariant={'inherit'}>{` | ${coursePeriod.label}`}</Typography>
                </div>
            </ButtonBar>
        </Link>
    );
};
