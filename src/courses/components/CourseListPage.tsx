import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { coursesSelectors } from '~/courses/state/coursesSelectors';
import { CourseButtonBar } from '~/courses/components/CourseButtonBar';

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

const Container = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 24px;
`;
