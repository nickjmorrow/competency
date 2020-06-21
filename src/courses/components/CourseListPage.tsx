import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { coursesSelectors } from '~/courses/state/coursesSelectors';
import { Course } from '~/courses/components/Course';

export const CourseListPage: React.FC = () => {
    const courses = useSelector(coursesSelectors.getCourses);

    return (
        <Container>
            {courses.map(c => (
                <Course key={c.courseId} course={c} />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 24px;
`;
