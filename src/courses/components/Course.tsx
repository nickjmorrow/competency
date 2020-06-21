import * as React from 'react';
import styled from 'styled-components';
import { Course as CourseType } from '~/courses/types/Course';
import { Typography } from '~/core/Typography';
import { Link } from '~/core/Link';

export const Course: React.FC<{ course: CourseType }> = ({ course }) => {
    return (
        <Link route={`/courses/${course.courseId}`}>
            <Container>
                <Typography>{course.name}</Typography>
            </Container>
        </Link>
    );
};

const Container = styled.div`
    background-color: ${p => p.theme.colors.core.cs2};
    width: 480px;
    padding: 16px;
    border-radius: ${p => p.theme.border.borderRadius.br1};
`;
