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
            {courses.map(c => (
                <CourseButtonBar key={c.courseId} course={c} />
            ))}
        </Container>
    );
};

const Container = styled.div``;

const CourseButtonBar: React.FC<{ course: Course }> = ({ course }) => {
    return (
        <Link route={`/courses/${course.courseId}`}>
            <ButtonBar>
                <Typography colorVariant={'inherit'}>{course.name}</Typography>
            </ButtonBar>
        </Link>
    );
};
